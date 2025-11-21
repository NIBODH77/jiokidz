import { Search, Heart, ShoppingCart, User, MapPin, ChevronDown, Menu, X, Bell, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { Link, useLocation } from "wouter";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [location, setLocation] = useLocation();
  
  // Initialize search query from URL if present
  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("q") || "";
  });

  const { getCartCount } = useCart();
  const totalItems = getCartCount();

  // Debounced auto-search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim()) {
        const newUrl = `/category/search?q=${encodeURIComponent(searchQuery)}`;
        // Only update if we are not already on this exact URL to avoid loops
        if (window.location.pathname + window.location.search !== newUrl) {
          setLocation(newUrl);
        }
      } else if (searchQuery === "" && location === "/category/search") {
         // Optional: if search is cleared, maybe go back or stay?
         // For now, let's just stay on the search page with empty results or show all
      }
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, setLocation, location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/category/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = [
    {
      name: "Boy Fashion",
      subcategories: ["T-Shirts", "Jeans", "Ethnic Wear", "Winter Wear", "Party Wear"]
    },
    {
      name: "Girl Fashion",
      subcategories: ["Dresses", "Skirts", "Ethnic Wear", "Winter Wear", "Party Wear"]
    },
    {
      name: "Toys",
      subcategories: ["Educational", "Soft Toys", "Outdoor", "Electronic", "Board Games"]
    },
    {
      name: "Diapering",
      subcategories: ["Diapers", "Wipes", "Diaper Bags", "Changing Mats", "Rash Cream"]
    },
    {
      name: "Gear",
      subcategories: ["Strollers", "Car Seats", "Baby Carriers", "Walkers", "Bouncers"]
    },
    {
      name: "Feeding",
      subcategories: ["Bottles", "Breast Pumps", "Baby Food", "High Chairs", "Bibs"]
    }
  ];

  return (
    <header className="w-full flex flex-col z-50 relative font-sans">
      {/* Top Strip - Grey - Hidden on Mobile */}
      <div className="hidden sm:flex bg-[#f1f3f6] py-1 px-3 md:px-4 text-[10px] md:text-[11px] font-normal text-[#424242] justify-between items-center border-b border-gray-200">
        <div className="flex gap-2 md:gap-4 text-[8px] md:text-[11px]">
          <span className="hidden sm:inline">Asia's Largest Online Baby & Kids Store</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="hidden md:inline text-green-600 font-bold">Health & Safety First</span>
        </div>
        <div className="flex gap-2 md:gap-4 items-center text-[8px] md:text-[11px]">
          <a href="#" className="hover:text-primary transition-colors">Support</a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="#" className="hidden sm:inline hover:text-primary transition-colors">Track Order</a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="#" className="hover:text-primary transition-colors text-primary font-bold">JioKidz Club</a>
        </div>
      </div>

      {/* Main Header - White */}
      <div className="bg-white py-2 px-3 md:px-4 shadow-sm sticky top-0 z-50 border-b border-gray-100 transition-all duration-300 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-0.5 md:gap-1 shrink-0 cursor-pointer group">
              <img 
                src="/jiokidz-logo.png" 
                alt="JioKidz" 
                className="h-9 md:h-11 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Search Bar - Desktop Only */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-xl relative">
            <div className="relative w-full flex shadow-sm border border-gray-300 overflow-hidden group focus-within:border-primary transition-colors rounded">
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-10 py-2.5 border-none shadow-none focus-visible:ring-0 text-sm placeholder:text-gray-400" 
                placeholder="Search for products..."
              />
              <button type="submit" className="bg-primary px-4 flex items-center justify-center cursor-pointer hover:bg-primary/90">
                <Search className="h-4 w-4 text-white" />
              </button>
            </div>
          </form>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 text-[11px] font-medium text-gray-700">
            {/* Wishlist */}
            <Link href="/wishlist">
              <button className="flex flex-col items-center text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 relative group min-w-[60px]">
                <Heart className="h-5 w-5" />
                <span className="text-[9px] mt-0.5">Wishlist</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  3
                </span>
              </button>
            </Link>

            {/* Notifications */}
            <div className="relative group">
              <button className="flex flex-col items-center text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 relative min-w-[60px]">
                <Bell className="h-5 w-5" />
                <span className="text-[9px] mt-0.5">Alerts</span>
                <span className="absolute top-0 right-2 bg-primary text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold animate-pulse">
                  2
                </span>
              </button>

              {/* Notification Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-bold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">New Sale Alert!</p>
                        <p className="text-xs text-gray-600 mt-1">Get 50% off on winter collection</p>
                        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Order Delivered</p>
                        <p className="text-xs text-gray-600 mt-1">Your order #12345 has been delivered</p>
                        <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-200 text-center">
                  <a href="#" className="text-sm text-primary font-semibold hover:underline">View All</a>
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link href="/cart">
              <button className="flex flex-col items-center text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 relative min-w-[60px]">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-[9px] mt-0.5">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute top-0 right-2 bg-primary text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>

            {/* Login */}
            <Link href="/login">
              <button className="flex flex-col items-center cursor-pointer hover:text-primary transition-all duration-300 group min-w-[60px] hover:scale-105">
                <User className="h-5 w-5 text-gray-600 group-hover:text-primary transition-all duration-300" />
                <span className="mt-0.5 text-[9px]">Login</span>
              </button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <Link href="/cart">
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] h-3.5 w-3.5 flex items-center justify-center rounded-full font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 hover:bg-gray-100 rounded transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="lg:hidden mt-2 relative">
          <div className="relative w-full flex shadow-sm border border-gray-300 overflow-hidden rounded">
            <Input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-10 py-2.5 h-9 border-none shadow-none focus-visible:ring-0 text-sm placeholder:text-gray-400" 
              placeholder="Search for products..."
            />
            <button type="submit" className="bg-primary px-3 flex items-center justify-center cursor-pointer">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
        </form>

        {/* Mobile Menu with Submenus */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-200 pt-3 max-h-[70vh] overflow-y-auto">
            <div className="space-y-1">
              {categories.map((category) => (
                <div key={category.name}>
                  <div
                    onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                    className="flex items-center justify-between px-3 py-2.5 hover:bg-gray-50 cursor-pointer font-medium text-sm rounded"
                  >
                    <span>{category.name}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${expandedCategory === category.name ? 'rotate-90' : ''}`} />
                  </div>
                  {expandedCategory === category.name && (
                    <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-3 mt-1 mb-2">
                      {category.subcategories.map((sub) => (
                        <Link key={sub} href={`/category/${sub.toLowerCase().replace(' ', '-')}`}>
                          <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-600 rounded">
                            {sub}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <Link href="/wishlist">
                  <div className="px-3 py-2.5 hover:bg-gray-50 cursor-pointer font-medium text-sm rounded flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </div>
                </Link>
                <Link href="/orders">
                  <div className="px-3 py-2.5 hover:bg-gray-50 cursor-pointer font-medium text-sm rounded flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    My Orders
                  </div>
                </Link>
                <Link href="/login">
                  <div className="px-3 py-2.5 hover:bg-gray-50 cursor-pointer font-medium text-sm rounded flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Login / Sign Up
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
