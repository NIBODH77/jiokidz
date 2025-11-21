
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ThumbsUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Reviews() {
  const [sortBy, setSortBy] = useState("recent");

  const reviews = [
    {
      id: 1,
      userName: "Priya Sharma",
      rating: 5,
      date: "15 Jan 2025",
      title: "Excellent Quality!",
      comment: "The fabric is very soft and comfortable for my baby. Worth every rupee!",
      images: [],
      helpful: 23,
      verified: true
    },
    {
      id: 2,
      userName: "Rajesh Kumar",
      rating: 4,
      date: "12 Jan 2025",
      title: "Good product",
      comment: "Nice quality but size runs a bit small. Order one size larger.",
      images: [],
      helpful: 15,
      verified: true
    },
    {
      id: 3,
      userName: "Anita Patel",
      rating: 5,
      date: "10 Jan 2025",
      title: "Perfect for my little one",
      comment: "My daughter loves this! The color is vibrant and it's very comfortable.",
      images: [],
      helpful: 31,
      verified: true
    },
    {
      id: 4,
      userName: "Amit Singh",
      rating: 3,
      date: "8 Jan 2025",
      title: "Average quality",
      comment: "It's okay for the price. Nothing exceptional.",
      images: [],
      helpful: 8,
      verified: false
    }
  ];

  const ratingBreakdown = {
    5: 65,
    4: 20,
    3: 10,
    2: 3,
    1: 2
  };

  const averageRating = 4.5;
  const totalReviews = 2456;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MegaMenu />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews & Ratings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Overall Rating */}
            <div className="text-center border-r border-gray-200">
              <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-6 w-6 ${star <= averageRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600">{totalReviews.toLocaleString('en-IN')} Ratings</p>
            </div>

            {/* Rating Breakdown */}
            <div className="md:col-span-2">
              <h3 className="font-bold text-gray-800 mb-4">Rating Breakdown</h3>
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium">{rating}</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${ratingBreakdown[rating]}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12">{ratingBreakdown[rating]}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-6">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
              Write a Review
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value="recent">Most Recent</option>
                <option value="helpful">Most Helpful</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{review.userName[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{review.userName}</p>
                    {review.verified && (
                      <span className="text-xs text-green-600 font-medium">✓ Verified Purchase</span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="font-bold text-gray-800">{review.title}</span>
              </div>

              <p className="text-gray-700 mb-4">{review.comment}</p>

              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="font-bold">
            Load More Reviews <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
