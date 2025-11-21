
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "wouter";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const discount = cartItems.reduce((total, item) => 
    total + (item.originalPrice - item.price) * item.quantity, 0
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <MegaMenu />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Add items to get started!</p>
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
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart ({cartItems.length} Items)</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={`${item.id}-${item.size}`} className="p-4">
                <div className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-400 uppercase">{item.brand}</h3>
                    <p className="text-gray-800 font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600 mb-2">Size: {item.size}</p>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-bold text-gray-900">₹{item.price.toLocaleString('en-IN')}</span>
                      <span className="text-sm text-gray-400 line-through">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-green-600 font-bold">{item.discount}% OFF</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-gray-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-red-600 hover:text-red-700 p-2"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">PRICE DETAILS</h2>
              <Separator className="mb-4" />
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Price ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>₹{(subtotal + discount).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Charges</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>
              </div>
              
              <Separator className="mb-4" />
              
              <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
              
              {discount > 0 && (
                <div className="bg-green-50 border border-green-200 rounded p-3 mb-4">
                  <p className="text-sm text-green-700 font-bold">
                    You will save ₹{discount.toLocaleString('en-IN')} on this order
                  </p>
                </div>
              )}

              <Link href="/checkout">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                  PROCEED TO CHECKOUT
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
