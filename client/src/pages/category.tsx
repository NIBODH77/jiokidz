import { useRoute, Link, useLocation } from "wouter";
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { products as allProducts } from "@/data/products";
import { useState, useMemo } from "react";

export default function CategoryPage() {
  const [location] = useLocation(); // Subscribe to location changes
  const [match, params] = useRoute("/category/:slug");
  const slug = params?.slug ? decodeURIComponent(params.slug) : "all-products";
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get("q") || "";
  
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popularity");

  // Filter products by category
  const categoryProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by search query if slug is 'search'
    if (slug === "search" && searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Filter by category slug
    else if (slug !== "all-categories" && slug !== "all-products") {
      const categoryName = slug.replace(/-/g, ' ');
      filtered = filtered.filter(p => 
        p.category.toLowerCase().includes(categoryName.toLowerCase()) ||
        p.title.toLowerCase().includes(categoryName.toLowerCase())
      );
    }

    // Filter by gender
    if (selectedGender.length > 0) {
      filtered = filtered.filter(p => {
        const title = p.title.toLowerCase();
        return selectedGender.some(g => {
          if (g === 'boys') return title.includes('boy');
          if (g === 'girls') return title.includes('girl');
          if (g === 'unisex') return !title.includes('boy') && !title.includes('girl');
          return false;
        });
      });
    }

    // Filter by price range
    if (selectedPriceRange.length > 0) {
      filtered = filtered.filter(p => {
        return selectedPriceRange.some(range => {
          if (range === 'under-500') return p.price < 500;
          if (range === '500-1000') return p.price >= 500 && p.price < 1000;
          if (range === '1000-2000') return p.price >= 1000 && p.price < 2000;
          if (range === 'above-2000') return p.price >= 2000;
          return false;
        });
      });
    }

    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => 
        selectedBrands.some(b => p.brand.toLowerCase() === b.toLowerCase())
      );
    }

    // Sort products
    const sorted = [...filtered];
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'discount') {
      sorted.sort((a, b) => b.discount - a.discount);
    } else if (sortBy === 'newest') {
      sorted.reverse();
    }

    return sorted;
  }, [slug, selectedGender, selectedPriceRange, selectedBrands, sortBy]);

  const toggleFilter = (setter: Function, value: string, current: string[]) => {
    if (current.includes(value)) {
      setter(current.filter(v => v !== value));
    } else {
      setter([...current, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedGender([]);
    setSelectedPriceRange([]);
    setSelectedBrands([]);
  };

  const activeFiltersCount = selectedGender.length + selectedPriceRange.length + selectedBrands.length;

  const products = categoryProducts;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <MegaMenu />
      
      <main className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 md:mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-primary whitespace-nowrap">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className="font-bold text-gray-800 capitalize whitespace-nowrap">{slug}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0 hidden md:block space-y-4">
             <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                <div className="flex items-center justify-between mb-4 pb-3 border-b">
                   <h3 className="font-bold text-gray-800 flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4 text-primary" />
                      Filters
                      {activeFiltersCount > 0 && (
                        <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">{activeFiltersCount}</span>
                      )}
                   </h3>
                   {activeFiltersCount > 0 && (
                     <button 
                       onClick={clearAllFilters}
                       className="text-xs text-primary hover:text-primary/80 font-semibold flex items-center gap-1"
                     >
                       <X className="h-3 w-3" /> Clear
                     </button>
                   )}
                </div>
                
                <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                   <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Gender</h4>
                      <div className="space-y-2">
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedGender.includes('boys')}
                              onChange={() => toggleFilter(setSelectedGender, 'boys', selectedGender)}
                            /> Boys
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedGender.includes('girls')}
                              onChange={() => toggleFilter(setSelectedGender, 'girls', selectedGender)}
                            /> Girls
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedGender.includes('unisex')}
                              onChange={() => toggleFilter(setSelectedGender, 'unisex', selectedGender)}
                            /> Unisex
                         </label>
                      </div>
                   </div>
                   
                   <div className="border-t pt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Price Range</h4>
                      <div className="space-y-2">
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedPriceRange.includes('under-500')}
                              onChange={() => toggleFilter(setSelectedPriceRange, 'under-500', selectedPriceRange)}
                            /> Under ₹500
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedPriceRange.includes('500-1000')}
                              onChange={() => toggleFilter(setSelectedPriceRange, '500-1000', selectedPriceRange)}
                            /> ₹500 - ₹1000
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedPriceRange.includes('1000-2000')}
                              onChange={() => toggleFilter(setSelectedPriceRange, '1000-2000', selectedPriceRange)}
                            /> ₹1000 - ₹2000
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedPriceRange.includes('above-2000')}
                              onChange={() => toggleFilter(setSelectedPriceRange, 'above-2000', selectedPriceRange)}
                            /> Above ₹2000
                         </label>
                      </div>
                   </div>

                   <div className="border-t pt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Brand</h4>
                      <div className="space-y-2">
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedBrands.includes('Carter\'s')}
                              onChange={() => toggleFilter(setSelectedBrands, 'Carter\'s', selectedBrands)}
                            /> Carter's
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedBrands.includes('Mothercare')}
                              onChange={() => toggleFilter(setSelectedBrands, 'Mothercare', selectedBrands)}
                            /> Mothercare
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedBrands.includes('Pampers')}
                              onChange={() => toggleFilter(setSelectedBrands, 'Pampers', selectedBrands)}
                            /> Pampers
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedBrands.includes('Fisher-Price')}
                              onChange={() => toggleFilter(setSelectedBrands, 'Fisher-Price', selectedBrands)}
                            /> Fisher-Price
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedBrands.includes('Chicco')}
                              onChange={() => toggleFilter(setSelectedBrands, 'Chicco', selectedBrands)}
                            /> Chicco
                         </label>
                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                            <input 
                              type="checkbox" 
                              className="rounded text-primary focus:ring-primary cursor-pointer"
                              checked={selectedBrands.includes('Hamleys')}
                              onChange={() => toggleFilter(setSelectedBrands, 'Hamleys', selectedBrands)}
                            /> Hamleys
                         </label>
                      </div>
                   </div>
                </div>
             </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-3 md:gap-2">
                <h1 className="text-lg md:text-2xl font-display font-bold text-gray-900 capitalize">
                  {slug === "search" ? `Results for "${searchQuery}"` : slug.replace(/-/g, ' ')} 
                  <span className="text-gray-400 text-sm md:text-lg font-normal ml-1 md:ml-2">({products.length} Items)</span>
                </h1>
                <div className="flex items-center gap-2 w-full md:w-auto">
                   <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">Sort:</span>
                   <select 
                     className="flex-1 md:flex-none text-xs md:text-sm border border-gray-300 rounded-md px-2 md:px-3 py-1.5 font-semibold text-gray-800 focus:ring-1 focus:ring-primary cursor-pointer bg-white"
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value)}
                   >
                      <option value="popularity">Popularity</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="discount">Discount: High to Low</option>
                      <option value="newest">Newest First</option>
                   </select>
                </div>
             </div>

             {products.length > 0 ? (
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
               </div>
             ) : (
               <div className="text-center py-12 md:py-20">
                 <div className="text-gray-400 text-4xl md:text-6xl mb-4">🔍</div>
                 <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">No Products Found</h3>
                 <p className="text-sm md:text-base text-gray-500 mb-6">Try adjusting your filters to see more results</p>
                 <Button onClick={clearAllFilters} className="bg-primary hover:bg-primary/90 text-sm md:text-base">
                   Clear All Filters
                 </Button>
               </div>
             )}
          </div>
        </div>
        
        {/* Recommendations Section */}
        {slug === "search" && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Recommended for You</h2>
            <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2">
              {allProducts
                .filter(p => !products.find(found => found.id === p.id)) // Exclude already found products
                .sort(() => 0.5 - Math.random()) // Randomize
                .slice(0, 4) // Take 4
                .map((product) => (
                  <div key={product.id} className="shrink-0 w-40 md:w-56">
                    <ProductCard {...product} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
