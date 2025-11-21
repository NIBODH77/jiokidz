import boyFashionImg from "@assets/stock_images/cute_baby_boy_fashio_8e8c6c1c.jpg";
import girlFashionImg from "@assets/stock_images/cute_baby_girl_dress_af09bbf2.jpg";
import diaperImg from "@assets/stock_images/baby_diapers_product_d5272d70.jpg";
import toyImg from "@assets/stock_images/baby_toys_colorful_b_e285b7f1.jpg";
import onesieImg from "@assets/stock_images/baby_onesie_romper_b3776f5f.jpg";
import shoesImg from "@assets/stock_images/baby_shoes_footwear_6117c0f1.jpg";
import winterImg from "@assets/stock_images/baby_winter_wear_jac_ce70e2b0.jpg";

export interface Product {
  id: string;
  image: string;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  clubPrice?: number;
  category: string;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  {
    id: "1",
    image: boyFashionImg,
    title: "Cotton Full Sleeves T-Shirt with Bow Tie",
    brand: "Carter's",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    clubPrice: 799,
    category: "Boy Fashion",
    rating: 4.5,
    reviews: 1245
  },
  {
    id: "2",
    image: girlFashionImg,
    title: "Sleeveless Frock Floral Print - Pink",
    brand: "Mothercare",
    price: 1249,
    originalPrice: 1699,
    discount: 26,
    clubPrice: 1099,
    category: "Girl Fashion",
    rating: 4.3,
    reviews: 890
  },
  {
    id: "3",
    image: diaperImg,
    title: "Premium Care Diaper Pants - Large (44 Count)",
    brand: "Pampers",
    price: 1899,
    originalPrice: 2399,
    discount: 20,
    category: "Diapering",
    rating: 4.7,
    reviews: 3456
  },
  {
    id: "4",
    image: toyImg,
    title: "Educational Learning Set for 1 Year Old",
    brand: "Fisher-Price",
    price: 2499,
    originalPrice: 3499,
    discount: 30,
    clubPrice: 2199,
    category: "Toys",
    rating: 4.8,
    reviews: 2102
  },
  {
    id: "5",
    image: boyFashionImg,
    title: "3-Piece Little Vest Set",
    brand: "Carter's",
    price: 1599,
    originalPrice: 2099,
    discount: 24,
    category: "Boy Fashion",
    rating: 4.4,
    reviews: 678
  },
  {
    id: "6",
    image: girlFashionImg,
    title: "Cute Summer Dress",
    brand: "Mothercare",
    price: 1399,
    originalPrice: 2099,
    discount: 33,
    category: "Girl Fashion",
    rating: 4.6,
    reviews: 523
  },
  {
    id: "7",
    image: onesieImg,
    title: "Romper Set for Baby Boys",
    brand: "Carter's",
    price: 1099,
    originalPrice: 1699,
    discount: 35,
    category: "Boy Fashion",
    rating: 4.5,
    reviews: 912
  },
  {
    id: "8",
    image: shoesImg,
    title: "First Walker Shoes",
    brand: "Chicco",
    price: 1899,
    originalPrice: 2699,
    discount: 29,
    category: "Footwear",
    rating: 4.7,
    reviews: 1456
  },
  {
    id: "9",
    image: winterImg,
    title: "Winter Jacket with Hood",
    brand: "Mothercare",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    category: "Winter Wear",
    rating: 4.6,
    reviews: 789
  },
  {
    id: "10",
    image: toyImg,
    title: "Soft Plush Teddy Bear",
    brand: "Hamleys",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    category: "Toys",
    rating: 4.8,
    reviews: 2345
  },
  {
    id: "11",
    image: diaperImg,
    title: "Ultra Soft Diaper Pants - Medium",
    brand: "Huggies",
    price: 1699,
    originalPrice: 2099,
    discount: 19,
    category: "Diapering",
    rating: 4.6,
    reviews: 2876
  },
  {
    id: "12",
    image: boyFashionImg,
    title: "Denim Jacket for Boys",
    brand: "Carter's",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    clubPrice: 1799,
    category: "Boy Fashion",
    rating: 4.7,
    reviews: 1123
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}
