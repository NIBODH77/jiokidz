import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Star, Truck, ShieldCheck, Clock, Percent, ChevronLeft, ChevronRight, ShoppingBag, Baby, Smile, Utensils, Bath, Wind, Heart, Apple, Sparkles, HomeIcon, Users } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "wouter";
import { products as productsData } from "@/data/products";
import { topBrands } from "@/data/brands";

// Stock Images
import boyFashionImg from "@assets/stock_images/cute_baby_boy_fashio_8e8c6c1c.jpg";
import girlFashionImg from "@assets/stock_images/cute_baby_girl_dress_af09bbf2.jpg";
import diaperImg from "@assets/stock_images/baby_diapers_product_d5272d70.jpg";
import toyImg from "@assets/stock_images/baby_toys_colorful_b_e285b7f1.jpg";
import diaperOfferImg from "@assets/stock_images/diaper_discount_offe_ecf681c0.jpg";
import footwearSaleImg from "@assets/stock_images/kids_footwear_sale_b_b97ccd2e.jpg";
import winterImg from "@assets/stock_images/baby_winter_wear_jac_ce70e2b0.jpg";
import ethnicWeddingImg from "@assets/stock_images/kids_ethnic_wear_wed_ecfcaed6.jpg";
import babyBoyTraditional from "@assets/stock_images/indian_baby_boy_trad_cd6cfb27.jpg";
import cuteClothes from "@assets/stock_images/cute_baby_clothes_fa_4bd72129.jpg";

export default function Home() {
  const products = productsData;

  const categories = [
    { name: "Boy Fashion", icon: ShoppingBag, img: boyFashionImg },
    { name: "Girl Fashion", icon: ShoppingBag, img: girlFashionImg },
    { name: "Footwear", icon: Baby, img: babyBoyTraditional },
    { name: "Toys", icon: Smile, img: toyImg },
    { name: "Diapering", icon: Baby, img: diaperImg },
    { name: "Gear", icon: ShoppingBag, img: cuteClothes },
    { name: "Feeding", icon: Utensils, img: boyFashionImg },
    { name: "Bath", icon: Bath, img: girlFashionImg },
    { name: "Nursery", icon: HomeIcon, img: diaperImg },
    { name: "Moms", icon: Heart, img: toyImg },
    { name: "Health", icon: Apple, img: babyBoyTraditional },
    { name: "Boutiques", icon: Sparkles, img: cuteClothes },
    { name: "Diapers & Wipes", icon: Baby, img: boyFashionImg },
    { name: "Winter Wear", icon: Wind, img: winterImg },
    { name: "Party Wear", icon: Sparkles, img: girlFashionImg },
    { name: "Ethnic Wear", icon: Users, img: ethnicWeddingImg },
  ];

  return (
    <div className="w-full bg-white">
      <Header />
      <MegaMenu />

      <main className="w-full">
        <HeroBanner />

        {/* Trust Badges */}
        <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-4 md:py-6 my-3 md:my-4">
          <div className="max-w-[1400px] mx-auto px-3 md:px-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-primary text-3xl md:text-4xl mb-2">🚚</div>
              <h3 className="font-bold text-gray-800 text-xs md:text-sm">Free Shipping</h3>
              <p className="text-xs text-gray-500 mt-0.5">Orders above ₹1,499</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-primary text-3xl md:text-4xl mb-2">✓</div>
              <h3 className="font-bold text-gray-800 text-xs md:text-sm">100% Safe</h3>
              <p className="text-xs text-gray-500 mt-0.5">Genuine Products</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-primary text-3xl md:text-4xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-800 text-xs md:text-sm">Fast Delivery</h3>
              <p className="text-xs text-gray-500 mt-0.5">2-Hour in select areas</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-primary text-3xl md:text-4xl mb-2">🎁</div>
              <h3 className="font-bold text-gray-800 text-xs md:text-sm">JioKidz Club</h3>
              <p className="text-xs text-gray-500 mt-0.5">Exclusive Rewards</p>
            </div>
          </div>
        </section>

        

        {/* Shop by Category - 4x4 Mobile & 4-per-screen Desktop */}
        <section className="max-w-[1400px] mx-auto px-0 md:px-4 py-4 md:py-6">
          <div className="flex items-center justify-between mb-4 md:mb-6 px-3 md:px-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide">Shop by Category</h2>
            <Link href="/category/all-categories">
              <Button variant="ghost" className="text-primary font-bold text-xs md:text-sm">View All</Button>
            </Link>
          </div>
          
          {/* Mobile: 4x4 Swipeable Carousel */}
          <div className="md:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pb-4 px-3" style={{ minWidth: 'fit-content' }}>
              {categories.map((cat, i) => {
                const IconComponent = cat.icon;
                return (
                  <Link key={i} href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="flex flex-col items-center gap-1.5 group cursor-pointer hover:-translate-y-1 transition-all duration-300 w-20 flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-[10px] font-bold text-gray-800 text-center group-hover:text-primary transition-colors line-clamp-2">{cat.name}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop/Laptop: 4-per-screen Swipeable */}
          <div className="hidden md:block overflow-x-auto scrollbar-hide px-4">
            <div className="flex gap-4 pb-4" style={{ minWidth: 'fit-content' }}>
              {categories.map((cat, i) => {
                const IconComponent = cat.icon;
                return (
                  <Link key={i} href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-all duration-300 w-28 flex-shrink-0">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-gray-800 text-center group-hover:text-primary transition-colors line-clamp-2">{cat.name}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="relative overflow-hidden group cursor-pointer rounded-lg md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-700 hover:-translate-y-1 h-48 md:h-64 bg-gray-100">
                 <img src={diaperOfferImg} loading="lazy" className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105" />
                 <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-red-500 text-white text-[10px] md:text-xs font-bold px-2.5 md:px-3 py-1 rounded-full z-10">Limited</div>
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-3 md:p-6 z-10">
                     <h3 className="text-white font-bold text-lg md:text-2xl mb-1">Diaper Deals</h3>
                     <p className="text-white/80 font-medium text-xs md:text-sm">Up to 40% OFF</p>
                 </div>
              </div>
              <div className="relative overflow-hidden group cursor-pointer rounded-lg md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-700 hover:-translate-y-1 h-48 md:h-64 bg-gray-100">
                 <img src={footwearSaleImg} loading="lazy" className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105" />
                 <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-orange-500 text-white text-[10px] md:text-xs font-bold px-2.5 md:px-3 py-1 rounded-full z-10">New</div>
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-3 md:p-6 z-10">
                     <h3 className="text-white font-bold text-lg md:text-2xl mb-1">Kids Footwear</h3>
                     <p className="text-white/80 font-medium text-xs md:text-sm">Starting ₹799</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Top Brands */}
        <section className="bg-gray-50 py-4 md:py-6 my-3 md:my-4">
          <div className="max-w-[1400px] mx-auto px-3 md:px-4">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide">Top Brands</h2>
              <Link href="/category/all-brands">
                <Button variant="ghost" className="text-primary font-bold text-xs md:text-sm">View All</Button>
              </Link>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
              {topBrands.map((brand) => (
                <Link key={brand.id} href={`/category/${brand.id}`} className="flex flex-col items-center gap-1.5 group cursor-pointer hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border-2 border-gray-200 shadow-sm group-hover:shadow-md group-hover:border-primary transition-all duration-300 flex items-center justify-center p-1.5 overflow-hidden">
                    <img src={brand.logo} alt={brand.name} loading="lazy" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-[8px] md:text-[10px] font-semibold text-gray-600 group-hover:text-primary transition-colors text-center line-clamp-1">{brand.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide">Featured</h2>
            <Link href="/category/all-products">
              <Button variant="ghost" className="text-primary font-bold text-xs md:text-sm">View All</Button>
            </Link>
          </div>
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2">
            {products.slice(0, 8).map((product) => (
              <div key={product.id} className="shrink-0 w-40 md:w-56">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide">Best Sellers</h2>
            <Link href="/category/all-products">
              <Button variant="ghost" className="text-primary font-bold text-xs md:text-sm">View All</Button>
            </Link>
          </div>
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2">
            {products.slice(2, 10).map((product) => (
              <div key={product.id} className="shrink-0 w-40 md:w-56">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>

        {/* Deal of the Day */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-56 md:h-80">
            <img src={winterImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center p-4 md:p-12">
              <div className="text-white max-w-md">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2.5 md:px-3 py-1 uppercase tracking-wider mb-2 md:mb-3 inline-block rounded">Deal</span>
                <h3 className="text-2xl md:text-4xl font-bold mb-2">Winter Sale</h3>
                <p className="text-sm md:text-lg font-medium mb-3 md:mb-4">60% OFF All Winter Collections</p>
                <Link href="/category/winter-wear">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 md:px-6 py-2 md:py-3 text-xs md:text-base">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-6 bg-white rounded-lg">
          <div className="flex items-center justify-between mb-3 md:mb-4 border-b border-gray-100 pb-2 md:pb-3">
            <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase">New Arrivals</h2>
                <p className="text-xs md:text-sm text-gray-500 mt-0.5">Latest styles for your child</p>
            </div>
            <Link href="/category/all-products">
              <Button variant="outline" className="text-xs md:text-sm font-bold uppercase">View All</Button>
            </Link>
          </div>
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2">
             {products.slice(0, 8).map((product) => (
               <div key={product.id} className="shrink-0 w-40 md:w-56">
                 <ProductCard {...product} />
               </div>
             ))}
          </div>
        </section>

        {/* Top Picks */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-6 bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg my-3 md:my-4">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase">Top Picks</h2>
            <Link href="/category/all-products">
              <Button variant="ghost" className="text-primary font-bold text-xs md:text-sm">View All</Button>
            </Link>
          </div>
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2">
            {products.slice(0, 8).map((product) => (
              <div key={product.id} className="shrink-0 w-40 md:w-56">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>

        {/* Flash Sale */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-6">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-4 md:p-6 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3 md:mb-4 gap-2">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-1">⚡ Flash Sale</h2>
                <p className="text-sm md:text-base">Ending in: 02:45:30</p>
              </div>
              <Link href="/category/all-products" className="w-full md:w-auto">
                <Button className="bg-white text-red-500 hover:bg-gray-100 font-bold text-xs md:text-sm w-full md:w-auto">View All Deals</Button>
              </Link>
            </div>
            <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2">
              {products.slice(0, 6).map((product) => (
                <div key={product.id} className="bg-white rounded overflow-hidden shrink-0 w-40 md:w-56">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop by Age */}
        <section className="bg-gray-50 py-4 md:py-6 my-3 md:my-4">
          <div className="max-w-[1400px] mx-auto px-3 md:px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 text-center uppercase">Shop by Age</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[
                { age: "0-6 Months", img: cuteClothes },
                { age: "6-12 Months", img: boyFashionImg },
                { age: "1-2 Years", img: girlFashionImg },
                { age: "2-5 Years", img: babyBoyTraditional }
              ].map((item, i) => (
                <div key={i} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500">
                  <img src={item.img} className="w-full h-40 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2 md:p-3">
                    <h3 className="text-white text-sm md:text-base font-bold">{item.age}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase">Recently Viewed</h2>
            <Link href="/category/all-products">
              <Button variant="ghost" className="text-primary font-bold text-xs md:text-sm">View All</Button>
            </Link>
          </div>
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2">
            {products.slice(0, 8).map((product) => (
              <div key={product.id} className="shrink-0 w-40 md:w-56">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 md:py-8 my-4 md:my-6">
          <div className="max-w-[1400px] mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">Why Parents Trust JioKidz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <div className="text-3xl md:text-4xl mb-3">✓</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Authentic Products</h3>
                <p className="text-gray-600 text-xs md:text-sm">100% genuine branded items for your child</p>
              </div>
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <div className="text-3xl md:text-4xl mb-3">💡</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Expert Advice</h3>
                <p className="text-gray-600 text-xs md:text-sm">Parenting tips from child care specialists</p>
              </div>
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <div className="text-3xl md:text-4xl mb-3">💰</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Best Prices</h3>
                <p className="text-gray-600 text-xs md:text-sm">Competitive pricing with regular discounts</p>
              </div>
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <div className="text-3xl md:text-4xl mb-3">🔄</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Easy Returns</h3>
                <p className="text-gray-600 text-xs md:text-sm">Hassle-free returns within 15 days</p>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Parents Section */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-6 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">Parents Love Our Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { name: "Priya Singh", text: "Best selection of baby products. Highly recommend JioKidz for quality and price." },
              { name: "Rajesh Kumar", text: "Fast delivery and authentic products. Excellent customer service. Will shop again!" },
              { name: "Neha Patel", text: "Great variety and quality. Arrived in perfect condition. Lifesaver for busy parents!" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-700 text-xs md:text-sm mb-3">"{review.text}"</p>
                <p className="font-semibold text-gray-900 text-xs md:text-sm">- {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="bg-gray-50 py-6 md:py-8 my-4 md:my-6">
          <div className="max-w-[1400px] mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Parenting Tips & Advice</h2>
            
            {/* Mobile: Swipeable */}
            <div className="md:hidden overflow-x-auto scrollbar-hide -mx-3">
              <div className="flex gap-4 px-3 pb-2">
                {[
                  { title: "Best Toys for Brain Development", date: "Nov 15", excerpt: "Learn which toys help develop cognitive skills...", img: toyImg },
                  { title: "Baby Sleep Essentials", date: "Nov 12", excerpt: "Tips and products for quality sleep...", img: babyBoyTraditional },
                  { title: "Kids Fashion Tips", date: "Nov 10", excerpt: "Keep your kids stylish and comfortable...", img: girlFashionImg }
                ].map((article, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm flex-shrink-0 w-[280px] overflow-hidden cursor-pointer">
                    <div className="h-40 bg-gray-200 overflow-hidden">
                      <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-primary font-semibold mb-1">{article.date}</p>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">{article.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden md:grid grid-cols-3 gap-5">
              {[
                { title: "Best Toys for Brain Development", date: "Nov 15", excerpt: "Learn which toys help develop cognitive skills...", img: toyImg },
                { title: "Baby Sleep Essentials", date: "Nov 12", excerpt: "Tips and products for quality sleep...", img: babyBoyTraditional },
                { title: "Kids Fashion Tips", date: "Nov 10", excerpt: "Keep your kids stylish and comfortable...", img: girlFashionImg }
              ].map((article, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer group">
                  <div className="h-40 bg-gray-200 overflow-hidden">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary font-semibold mb-1">{article.date}</p>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{article.title}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2">{article.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Download */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-6 md:py-8 my-4 md:my-6">
          <div className="bg-gradient-to-r from-primary to-orange-500 text-white rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">Download JioKidz App</h2>
              <p className="text-sm md:text-base opacity-90 mb-3 md:mb-4">Shop on the go with exclusive app-only deals</p>
              <div className="flex gap-2">
                <button className="bg-white text-primary hover:bg-gray-100 px-4 md:px-6 py-2 md:py-3 rounded font-bold text-xs md:text-sm transition-colors">App Store</button>
                <button className="border-2 border-white text-white hover:bg-white/10 px-4 md:px-6 py-2 md:py-3 rounded font-bold text-xs md:text-sm transition-colors">Play Store</button>
              </div>
            </div>
            <div className="text-4xl md:text-6xl">📱</div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-6 md:py-8 mb-6 md:mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Join Our Community</h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Get exclusive offers and parenting tips</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded border border-gray-300 text-xs md:text-sm" />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded font-bold text-xs md:text-sm whitespace-nowrap transition-colors">Subscribe</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
