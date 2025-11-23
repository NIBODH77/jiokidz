
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import boyFashionImg from "@assets/stock_images/cute_baby_boy_fashio_8e8c6c1c.jpg";
import girlFashionImg from "@assets/stock_images/cute_baby_girl_dress_af09bbf2.jpg";

export default function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      image: boyFashionImg,
      title: "Baby Oye Cotton Full Sleeves T-Shirt with Bow Tie",
      brand: "Baby Oye",
      price: 1099,
      originalPrice: 2199,
      discount: 50,
      clubPrice: 949
    },
    {
      id: 2,
      image: girlFashionImg,
      title: "Cucumber Sleeveless Frock Floral Print - Pink",
      brand: "Cucumber",
      price: 1299,
      originalPrice: 1749,
      discount: 26,
      clubPrice: 1149
    }
  ];

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <MegaMenu />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-6">Add items you love to your wishlist!</p>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MegaMenu />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            My Wishlist ({wishlistItems.length} Items)
          </h1>
          <Button variant="outline" className="font-bold">
            Add All to Cart <ShoppingBag className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
