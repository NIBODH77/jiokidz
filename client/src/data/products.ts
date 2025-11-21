import boyFashionImg from "@assets/stock_images/cute_baby_boy_fashio_8e8c6c1c.jpg";
import girlFashionImg from "@assets/stock_images/cute_baby_girl_dress_af09bbf2.jpg";
import diaperImg from "@assets/stock_images/baby_diapers_product_d5272d70.jpg";
import toyImg from "@assets/stock_images/baby_toys_colorful_b_e285b7f1.jpg";
import onesieImg from "@assets/stock_images/baby_onesie_romper_b3776f5f.jpg";
import shoesImg from "@assets/stock_images/baby_shoes_footwear_6117c0f1.jpg";
import winterImg from "@assets/stock_images/baby_winter_wear_jac_ce70e2b0.jpg";
import newBoyFashion from "@assets/stock_images/baby_boy_fashion_t-s_981dec51.jpg";
import newGirlDress from "@assets/stock_images/baby_girl_party_dres_51836048.jpg";
import newToys from "@assets/stock_images/baby_toys_educationa_d35f61e1.jpg";
import newStroller from "@assets/stock_images/baby_stroller_pram_m_b4e60717.jpg";
import newFeeding from "@assets/stock_images/baby_feeding_bottle__051154c1.jpg";
import newWinter from "@assets/stock_images/baby_winter_jacket_c_e44f3726.jpg";
import newShoes from "@assets/stock_images/baby_shoes_cute_snea_e8b9f68e.jpg";

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
  },
  // New Products
  {
    id: "13",
    image: newBoyFashion,
    title: "Cool Graphic T-Shirt - Blue",
    brand: "Mothercare",
    price: 699,
    originalPrice: 999,
    discount: 30,
    category: "Boy Fashion",
    rating: 4.2,
    reviews: 45
  },
  {
    id: "14",
    image: newGirlDress,
    title: "Pink Princess Party Frock",
    brand: "Hamleys",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    category: "Girl Fashion",
    rating: 4.9,
    reviews: 320
  },
  {
    id: "15",
    image: newToys,
    title: "Building Blocks Set (50 pcs)",
    brand: "Fisher-Price",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Toys",
    rating: 4.6,
    reviews: 150
  },
  {
    id: "16",
    image: newStroller,
    title: "Urban Glide Stroller - Grey",
    brand: "Chicco",
    price: 15999,
    originalPrice: 24999,
    discount: 36,
    category: "Gear",
    rating: 4.8,
    reviews: 89
  },
  {
    id: "17",
    image: newFeeding,
    title: "Anti-Colic Feeding Bottle Set",
    brand: "Philips Avent",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    category: "Feeding",
    rating: 4.7,
    reviews: 560
  },
  {
    id: "18",
    image: newWinter,
    title: "Cozy Puffer Jacket - Red",
    brand: "Carter's",
    price: 2199,
    originalPrice: 3499,
    discount: 37,
    category: "Winter Wear",
    rating: 4.5,
    reviews: 210
  },
  {
    id: "19",
    image: newShoes,
    title: "Light-up Sneakers for Kids",
    brand: "Nike",
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    category: "Footwear",
    rating: 4.4,
    reviews: 180
  },
  {
    id: "20",
    image: newBoyFashion,
    title: "Checkered Shirt & Jeans Set",
    brand: "U.S. Polo Assn.",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    category: "Boy Fashion",
    rating: 4.3,
    reviews: 120
  },
  {
    id: "21",
    image: newGirlDress,
    title: "Floral Summer Sundress",
    brand: "H&M",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    category: "Girl Fashion",
    rating: 4.5,
    reviews: 95
  },
  {
    id: "22",
    image: newToys,
    title: "Musical Activity Table",
    brand: "Fisher-Price",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: "Toys",
    rating: 4.7,
    reviews: 240
  },
  {
    id: "23",
    image: newStroller,
    title: "Compact Travel Stroller",
    brand: "Joie",
    price: 9999,
    originalPrice: 15999,
    discount: 37,
    category: "Gear",
    rating: 4.6,
    reviews: 110
  },
  {
    id: "24",
    image: newFeeding,
    title: "Silicone Sipper Cup",
    brand: "Mee Mee",
    price: 499,
    originalPrice: 799,
    discount: 37,
    category: "Feeding",
    rating: 4.4,
    reviews: 340
  },
  {
    id: "25",
    image: newWinter,
    title: "Fleece Lined Hoodie",
    brand: "Gap",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    category: "Winter Wear",
    rating: 4.5,
    reviews: 160
  },
  {
    id: "26",
    image: newShoes,
    title: "Canvas Slip-on Shoes",
    brand: "Crocs",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    category: "Footwear",
    rating: 4.3,
    reviews: 280
  },
  {
    id: "27",
    image: boyFashionImg,
    title: "Formal Suit Set for Boys",
    brand: "Raymond",
    price: 3499,
    originalPrice: 5999,
    discount: 41,
    category: "Boy Fashion",
    rating: 4.8,
    reviews: 90
  },
  {
    id: "28",
    image: girlFashionImg,
    title: "Sequined Party Gown",
    brand: "Barbie",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    category: "Girl Fashion",
    rating: 4.6,
    reviews: 150
  },
  {
    id: "29",
    image: toyImg,
    title: "Remote Control Car",
    brand: "Hot Wheels",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    category: "Toys",
    rating: 4.5,
    reviews: 420
  },
  {
    id: "30",
    image: diaperImg,
    title: "Newborn Taped Diapers (60 pcs)",
    brand: "MamyPoko",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    category: "Diapering",
    rating: 4.7,
    reviews: 890
  },
  {
    id: "31",
    image: onesieImg,
    title: "Organic Cotton Onesie Pack of 3",
    brand: "Mothercare",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Boy Fashion",
    rating: 4.8,
    reviews: 340
  },
  {
    id: "32",
    image: shoesImg,
    title: "Leather Formal Shoes",
    brand: "Hush Puppies",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    category: "Footwear",
    rating: 4.5,
    reviews: 120
  },
  {
    id: "33",
    image: winterImg,
    title: "Knitted Sweater - Blue",
    brand: "Allen Solly",
    price: 1199,
    originalPrice: 1999,
    discount: 40,
    category: "Winter Wear",
    rating: 4.4,
    reviews: 210
  },
  {
    id: "34",
    image: toyImg,
    title: "Kitchen Play Set",
    brand: "Hamleys",
    price: 2999,
    originalPrice: 4499,
    discount: 33,
    category: "Toys",
    rating: 4.7,
    reviews: 180
  },
  {
    id: "35",
    image: diaperImg,
    title: "Baby Wipes (Pack of 3)",
    brand: "Johnson's",
    price: 499,
    originalPrice: 699,
    discount: 28,
    category: "Diapering",
    rating: 4.8,
    reviews: 1200
  },
  {
    id: "36",
    image: boyFashionImg,
    title: "Cargo Shorts - Beige",
    brand: "Gap",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    category: "Boy Fashion",
    rating: 4.3,
    reviews: 150
  },
  {
    id: "37",
    image: girlFashionImg,
    title: "Denim Skirt with Embroidery",
    brand: "Levi's",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Girl Fashion",
    rating: 4.5,
    reviews: 110
  },
  {
    id: "38",
    image: newStroller,
    title: "Convertible Car Seat",
    brand: "Graco",
    price: 18999,
    originalPrice: 25999,
    discount: 27,
    category: "Gear",
    rating: 4.9,
    reviews: 75
  },
  {
    id: "39",
    image: newFeeding,
    title: "Manual Breast Pump",
    brand: "Medela",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    category: "Feeding",
    rating: 4.6,
    reviews: 230
  },
  {
    id: "40",
    image: newWinter,
    title: "Thermal Innerwear Set",
    brand: "Jockey",
    price: 799,
    originalPrice: 999,
    discount: 20,
    category: "Winter Wear",
    rating: 4.7,
    reviews: 450
  },
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
