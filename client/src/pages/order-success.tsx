
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Package, Truck, Download } from "lucide-react";
import { Link } from "wouter";

export default function OrderSuccess() {
  const orderDetails = {
    orderId: "JK" + Date.now().toString().slice(-8),
    date: new Date().toLocaleDateString('en-IN'),
    total: 2549,
    deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MegaMenu />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Card className="p-8 text-center">
          <CheckCircle2 className="h-20 w-20 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-8">Thank you for shopping with JioKidz</p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-sm text-gray-500 mb-1">Order ID</p>
                <p className="font-bold text-gray-900">{orderDetails.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Order Date</p>
                <p className="font-bold text-gray-900">{orderDetails.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Order Total</p>
                <p className="font-bold text-gray-900">₹{orderDetails.total.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Expected Delivery</p>
                <p className="font-bold text-gray-900">{orderDetails.deliveryDate}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-gray-800">Order Confirmed</p>
              <p className="text-xs text-gray-600">We've received your order</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Truck className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="font-bold text-gray-500">Shipped</p>
              <p className="text-xs text-gray-500">In progress</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <CheckCircle2 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="font-bold text-gray-500">Delivered</p>
              <p className="text-xs text-gray-500">Pending</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/orders">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                Track Order
              </Button>
            </Link>
            <Button variant="outline" className="font-bold">
              <Download className="mr-2 h-4 w-4" />
              Download Invoice
            </Button>
            <Link href="/">
              <Button variant="outline" className="font-bold">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </Card>
      </main>
    </div>
  );
}
