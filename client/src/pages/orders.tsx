
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, Truck, CheckCircle2, RotateCcw } from "lucide-react";
import boyFashionImg from "@assets/stock_images/cute_baby_boy_fashio_8e8c6c1c.jpg";

export default function Orders() {
  const orders = [
    {
      id: "JK12345678",
      date: "15 Jan 2025",
      status: "Delivered",
      total: 2549,
      items: [
        {
          id: 1,
          image: boyFashionImg,
          title: "Baby Oye Cotton Full Sleeves T-Shirt",
          quantity: 2,
          price: 1099
        }
      ]
    },
    {
      id: "JK12345679",
      date: "18 Jan 2025",
      status: "In Transit",
      total: 1899,
      deliveryDate: "22 Jan 2025",
      items: [
        {
          id: 2,
          image: boyFashionImg,
          title: "Pampers Premium Care Diaper Pants",
          quantity: 1,
          price: 1899
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "Delivered":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case "In Transit":
        return <Truck className="h-5 w-5 text-blue-600" />;
      default:
        return <Package className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MegaMenu />
      
      <main className="max-w-[1400px] mx-auto px-3 md:px-4 py-4 md:py-8">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">My Orders</h1>
        
        <div className="space-y-3 md:space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-3 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-4 pb-3 md:pb-4 border-b">
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Order ID</p>
                  <p className="font-bold text-gray-900 text-xs md:text-base">{order.id}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Placed on</p>
                  <p className="font-bold text-gray-900 text-xs md:text-base">{order.date}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Total</p>
                  <p className="font-bold text-gray-900 text-xs md:text-base">₹{order.total.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(order.status)}
                  <span className="font-bold text-gray-800 text-xs md:text-base">{order.status}</span>
                </div>
              </div>

              {order.items.map((item) => (
                <div key={item.id} className="flex gap-2 md:gap-4 mb-3 md:mb-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-xs md:text-base line-clamp-2">{item.title}</p>
                    <p className="text-xs md:text-sm text-gray-600">Qty: {item.quantity}</p>
                    <p className="font-bold text-gray-900 text-xs md:text-base">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}

              {order.deliveryDate && (
                <div className="bg-blue-50 rounded p-2 md:p-3 mb-3 md:mb-4">
                  <p className="text-xs md:text-sm text-blue-800">
                    <Truck className="inline h-3 md:h-4 w-3 md:w-4 mr-2" />
                    Expected delivery by <span className="font-bold">{order.deliveryDate}</span>
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 md:gap-3">
                <Button variant="outline" className="font-bold text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
                  Track Order
                </Button>
                {order.status === "Delivered" && (
                  <>
                    <Button variant="outline" className="font-bold text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-1">
                      <RotateCcw className="h-3 md:h-4 w-3 md:w-4" />
                      <span className="hidden sm:inline">Return</span>
                    </Button>
                    <Button variant="outline" className="font-bold text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
                      Review
                    </Button>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
