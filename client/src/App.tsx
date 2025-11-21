import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Home from "@/pages/home";
import CategoryPage from "@/pages/category";
import ProductDetail from "@/pages/product-detail";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";
import Reviews from "@/pages/reviews";
import Wishlist from "@/pages/wishlist";
import Orders from "@/pages/orders";
import OrderSuccess from "@/pages/order-success";
import Login from "@/pages/login";
import Profile from "@/pages/profile";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:slug" component={CategoryPage} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/orders" component={Orders} />
      <Route path="/order-success" component={OrderSuccess} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
