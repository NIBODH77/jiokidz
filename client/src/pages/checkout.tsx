
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Wallet, Building, CheckCircle2, MapPin, User, Phone, Mail } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [, setLocation] = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = getCartTotal();
  const discount = cartItems.reduce((total, item) => 
    total + (item.originalPrice - item.price) * item.quantity, 0
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    clearCart();
    setLocation("/order-success");
  };

  if (cartItems.length === 0) {
    setLocation("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MegaMenu />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-gray-900">DELIVERY ADDRESS</h2>
              </div>
              <Separator className="mb-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Enter your name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="10-digit mobile number" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input id="address" placeholder="House No., Building Name" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="locality">Locality *</Label>
                  <Input id="locality" placeholder="Road Name, Area, Colony" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="City" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" placeholder="State" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input id="pincode" placeholder="6-digit pincode" className="mt-1" />
                </div>
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-gray-900">PAYMENT METHOD</h2>
              </div>
              <Separator className="mb-4" />
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-4 border rounded hover:border-primary cursor-pointer">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-bold">Credit / Debit Card</p>
                        <p className="text-xs text-gray-500">Visa, Mastercard, Rupay accepted</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded hover:border-primary cursor-pointer">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Wallet className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-bold">UPI</p>
                        <p className="text-xs text-gray-500">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded hover:border-primary cursor-pointer">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Building className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-bold">Net Banking</p>
                        <p className="text-xs text-gray-500">All major banks supported</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded hover:border-primary cursor-pointer">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer flex-1">
                      <div>
                        <p className="font-bold">Cash on Delivery</p>
                        <p className="text-xs text-gray-500">Pay when you receive</p>
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">ORDER SUMMARY</h2>
              <Separator className="mb-4" />
              
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                      <p className="text-xs text-gray-500">Size: {item.size} | Qty: {item.quantity}</p>
                      <p className="text-sm font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="mb-4" />
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>
              </div>
              
              <Separator className="mb-4" />
              
              <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>

              <Button 
                onClick={handlePlaceOrder}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6"
              >
                PLACE ORDER
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By placing this order, you agree to our Terms & Conditions
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
