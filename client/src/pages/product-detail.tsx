
import { useRoute, Link, useLocation } from "wouter";
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ChevronRight, Heart, Share2, Star, ShoppingCart, Truck, ShieldCheck, RotateCcw, Gift, Award, Clock, Zap } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import boyFashionImg from "@assets/stock_images/cute_baby_boy_fashio_8e8c6c1c.jpg";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const product = {
    id: params?.id || "1",
    images: [boyFashionImg, boyFashionImg, boyFashionImg, boyFashionImg],
    title: "Baby Oye Cotton Full Sleeves T-Shirt with Bow Tie - Premium Quality",
    brand: "Baby Oye",
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    clubPrice: 949,
    rating: 4.5,
    reviews: 2456,
    sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M"],
    colors: ["Blue", "Red", "Green"],
    description: "Premium quality cotton t-shirt for baby boys. Soft, comfortable and stylish with cute bow tie design. Made with 100% pure cotton fabric that's gentle on baby's sensitive skin.",
    features: [
      "100% Pure Cotton - Soft & Breathable",
      "Machine Washable - Easy Care",
      "Skin Friendly - No Harmful Chemicals",
      "Durable Quality - Long Lasting",
      "Cute Bow Tie Design - Stylish Look"
    ],
    ageGroup: "0-2 Years",
    specifications: {
      "Material": "100% Cotton",
      "Pattern": "Solid with Bow Tie",
      "Sleeve": "Full Sleeves",
      "Neck": "Round Neck",
      "Care": "Machine Wash"
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: selectedSize,
      quantity: quantity,
      discount: product.discount,
    });
    toast({
      title: "Added to cart!",
      description: `${quantity} item(s) added successfully`,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setLocation("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <MegaMenu />
      
      <main className="w-full mx-auto px-2 md:px-3 lg:px-4 py-3 md:py-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 mb-3 md:mb-4 overflow-x-auto scrollbar-hide max-w-7xl mx-auto">
          <Link href="/" className="hover:text-primary whitespace-nowrap">Home</Link>
          <ChevronRight className="h-3 w-3 flex-shrink-0" />
          <Link href="/category/boy-fashion" className="hover:text-primary whitespace-nowrap">Boy Fashion</Link>
          <ChevronRight className="h-3 w-3 flex-shrink-0" />
          <span className="font-medium text-gray-800 truncate max-w-[150px] md:max-w-none">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 max-w-7xl mx-auto">
          {/* Images Section - Left */}
          <div className="space-y-2 md:space-y-3">
            <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-2 md:p-3 lg:p-4 sticky top-20">
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden mb-3 group">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="bg-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                  <button className="bg-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                {product.discount > 0 && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square border-2 rounded-lg overflow-hidden transition-all hover:shadow-md ${
                      selectedImage === idx ? 'border-primary shadow-md' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info Section - Right */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
              {/* Brand & Title */}
              <div className="mb-4">
                <Link href={`/brand/${product.brand.toLowerCase()}`}>
                  <h3 className="text-sm font-bold text-primary uppercase mb-2 hover:underline cursor-pointer inline-block">
                    {product.brand}
                  </h3>
                </Link>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">{product.title}</h1>
                
                {/* Rating & Reviews */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm">
                    <span>{product.rating}</span>
                    <Star className="h-3.5 w-3.5 fill-white" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {product.reviews.toLocaleString('en-IN')} Ratings & {Math.floor(product.reviews * 0.3).toLocaleString('en-IN')} Reviews
                  </span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Verified Buyers
                  </Badge>
                </div>
              </div>

              {/* Price Section */}
              <div className="border-y border-gray-200 py-4 mb-4">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <Badge className="bg-green-600 hover:bg-green-700 text-sm px-3 py-1">
                    {product.discount}% OFF
                  </Badge>
                </div>
                {product.clubPrice && (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold text-gray-800 text-sm">Club Member Price: </span>
                      <span className="text-primary font-bold text-xl">₹{product.clubPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Offers */}
              <div className="mb-5">
                <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Gift className="h-4 w-4 text-primary" />
                  Available Offers
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <Zap className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Bank Offer:</strong> 10% instant discount on SBI Credit Cards</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Zap className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Special Price:</strong> Get extra 5% off (price inclusive of discount)</span>
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-5">
                <h3 className="text-sm font-bold text-gray-800 mb-3">SELECT SIZE (Age)</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-3 border-2 rounded-lg font-bold text-sm transition-all hover:border-primary ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-white shadow-md'
                          : 'border-gray-300 hover:shadow-md'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-800 mb-3">QUANTITY</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg font-bold hover:border-primary hover:bg-gray-50 transition-all"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg font-bold hover:border-primary hover:bg-gray-50 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <Button 
                  onClick={handleAddToCart}
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-6 text-base shadow-md hover:shadow-lg transition-all"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  ADD TO CART
                </Button>
                <Button 
                  onClick={handleBuyNow}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-base shadow-md hover:shadow-lg transition-all"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  BUY NOW
                </Button>
              </div>

              {/* Delivery Info */}
              <div className="border-t pt-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Delivery Options</h3>
                <div className="flex items-center gap-3 mb-3">
                  <input 
                    type="text" 
                    placeholder="Enter Pincode" 
                    className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-primary outline-none text-sm"
                  />
                  <Button variant="outline" className="font-bold">Check</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <Truck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Free Delivery</p>
                      <p className="text-xs text-gray-600">On orders above ₹500</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RotateCcw className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Easy Returns</p>
                      <p className="text-xs text-gray-600">30 Days Return Policy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">100% Genuine</p>
                      <p className="text-xs text-gray-600">Assured Products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 border-b pb-3">
                Product Details
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">Description:</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">Key Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3 text-sm">Specifications:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="border-b border-gray-100 pb-2">
                        <p className="text-xs text-gray-500 mb-1">{key}</p>
                        <p className="text-sm font-medium text-gray-800">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ratings & Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
              <div className="flex items-center justify-between mb-6 border-b pb-4">
                <h2 className="text-lg font-bold text-gray-900">Ratings & Reviews</h2>
                <Link href="/reviews">
                  <Button variant="outline" className="font-bold text-sm">
                    See All Reviews
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center md:border-r border-gray-200">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{product.rating}</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-5 w-5 ${star <= product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{product.reviews.toLocaleString('en-IN')} Ratings</p>
                </div>

                <div className="md:col-span-2">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const percentage = rating === 5 ? 65 : rating === 4 ? 20 : rating === 3 ? 10 : rating === 2 ? 3 : 2;
                    return (
                      <div key={rating} className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium w-8">{rating}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-green-500 h-2.5 rounded-full transition-all" 
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right font-medium">{percentage}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Write Review Form */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 text-sm">Write Your Review</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for your review!");
                }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          className="hover:scale-110 transition-transform"
                        >
                          <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400 hover:fill-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Review Title</label>
                    <Input 
                      placeholder="Summarize your experience" 
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                    <textarea 
                      placeholder="Share your thoughts about this product..."
                      className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <Input 
                      placeholder="Enter your name" 
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold">
                    Submit Review
                  </Button>
                </form>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-4 text-sm">Customer Reviews</h3>
                <div className="space-y-4">
                  {[
                    { name: "Priya Sharma", rating: 5, comment: "Excellent quality! My baby loves wearing it. Very soft fabric and the bow tie looks adorable.", date: "15 Jan 2024", verified: true },
                    { name: "Rajesh Kumar", rating: 4, comment: "Good product overall. Runs slightly small, so order one size bigger. Quality is great though!", date: "12 Jan 2024", verified: true }
                  ].map((review, idx) => (
                    <div key={idx} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm font-bold">{review.name[0]}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-sm">{review.name}</p>
                            {review.verified && (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px] px-1.5 py-0">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star} 
                                  className={`h-3.5 w-3.5 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
