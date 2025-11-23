import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  id?: string;
  image: string;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  clubPrice?: number;
}

export function ProductCard({ id = "1", image, title, brand, price, originalPrice, discount, clubPrice }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <a href={`/product/${id}`}>
      <Card className="group overflow-hidden border border-gray-200 hover:border-primary shadow-sm hover:shadow-2xl transition-all duration-700 ease-out rounded-xl bg-white cursor-pointer h-full flex flex-col hover:-translate-y-2 transform">
      <CardContent className="p-0 relative aspect-square bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
          <Button 
            variant="secondary" 
            size="icon" 
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`rounded-full h-9 w-9 bg-white/95 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 ${isLiked ? 'bg-red-50' : ''}`}
          >
            <Heart className={`h-4 w-4 transition-all duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'}`} />
          </Button>
        </div>
        {discount > 0 && (
          <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
            {discount}% OFF
          </div>
        )}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_100%]" />
        )}
        <img 
          src={image} 
          alt={title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {clubPrice && (
           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm p-3 flex justify-center items-center gap-1.5 text-xs text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span>Club Price:</span>
              <span className="text-yellow-400 text-sm">₹{clubPrice.toLocaleString('en-IN')}</span>
           </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 gap-2 flex-1 bg-white">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">{brand}</h3>
        <h2 className="text-sm font-medium text-gray-800 line-clamp-2 leading-relaxed flex-1 min-h-[2.5rem]" title={title}>
          {title}
        </h2>
        
        <div className="flex items-center gap-2 mt-auto w-full pt-2 border-t border-gray-100">
          <span className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">₹{price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-gray-400 line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
        </div>
      </CardFooter>
    </Card>
    </a>
  );
}
