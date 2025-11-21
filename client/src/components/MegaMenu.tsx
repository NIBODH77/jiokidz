import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const menuCategories = [
  {
    name: "All Categories",
    subcategories: [
      "Boy Fashion", "Girl Fashion", "Footwear", "Toys", "Diapering", 
      "Gear", "Feeding", "Bath", "Nursery", "Moms", "Health", "Boutiques"
    ]
  },
  {
    name: "BOY FASHION",
    subcategories: ["T-Shirts", "Jeans", "Shorts", "Ethnic Wear", "Winter Wear", "Party Wear", "Innerwear", "Sleepwear"]
  },
  {
    name: "GIRL FASHION",
    subcategories: ["Dresses", "Skirts", "Tops", "Ethnic Wear", "Winter Wear", "Party Wear", "Innerwear", "Sleepwear"]
  },
  {
    name: "FOOTWEAR",
    subcategories: ["Shoes", "Sandals", "Boots", "Flip Flops", "School Shoes", "Sports Shoes", "Slippers"]
  },
  {
    name: "TOYS",
    subcategories: ["Educational", "Soft Toys", "Action Figures", "Outdoor Toys", "Electronic Toys", "Board Games", "Puzzles", "Building Blocks"]
  },
  {
    name: "DIAPERING",
    subcategories: ["Diapers", "Wipes", "Diaper Bags", "Changing Mats", "Rash Cream", "Diaper Rash Oils", "Pull Ups"]
  },
  {
    name: "GEAR",
    subcategories: ["Strollers", "Car Seats", "Baby Carriers", "Walkers", "Bouncers", "Swings", "Cribs", "Travel Gear"]
  },
  {
    name: "FEEDING",
    subcategories: ["Bottles", "Bottle Sterilizers", "Breast Pumps", "Bottle Warmers", "High Chairs", "Bibs", "Feeding Utensils"]
  },
  {
    name: "BATH",
    subcategories: ["Bath Tubs", "Bath Seats", "Shower Gels", "Shampoos", "Towels", "Bath Toys", "Wash Products"]
  },
  {
    name: "NURSERY",
    subcategories: ["Bedding", "Bed Sheets", "Blankets", "Pillows", "Mattresses", "Lighting", "Decor"]
  },
  {
    name: "MOMS",
    subcategories: ["Maternity Wear", "Nursing Wear", "Pregnancy Pillows", "Mom Care Products", "Postpartum Recovery"]
  },
  {
    name: "HEALTH",
    subcategories: ["Vitamins", "Health Supplements", "First Aid", "Thermometers", "Humidifiers", "Safety Locks"]
  },
  {
    name: "BOUTIQUES",
    subcategories: ["Premium Collections", "Exclusive Brands", "Limited Edition", "Designer Wear", "Special Occasion"]
  }
];

export function MegaMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="bg-white hidden md:block sticky top-[72px] z-40 shadow-sm border-b border-gray-200 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-0">
        <div className="flex">
          {menuCategories.map((category) => (
            <div
              key={category.name}
              className="relative group"
              onMouseEnter={() => setOpenMenu(category.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="h-11 bg-white text-gray-900 rounded-none px-3 lg:px-4 text-[12px] font-bold uppercase tracking-normal transition-all duration-300 border-r border-gray-100 last:border-r-0 hover:bg-primary/5 hover:text-primary group-hover:bg-primary/10 group-hover:text-primary whitespace-nowrap flex items-center gap-1"
              >
                {category.name}
              </button>
              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full w-80 bg-white shadow-xl rounded-none border-t-2 border-primary transition-all duration-200 transform origin-top ${
                  openMenu === category.name ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-95"
                }`}
              >
                <div className="p-3 space-y-0.5 max-h-96 overflow-y-auto">
                  {category.subcategories.map((sub) => (
                    <Link key={sub} href={`/category/${sub.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="px-3 py-2.5 hover:bg-primary/10 cursor-pointer text-sm text-gray-700 hover:text-primary hover:font-semibold font-medium transition-all duration-200 rounded">
                        {sub}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
