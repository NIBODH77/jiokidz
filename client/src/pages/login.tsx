
import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useLocation } from "wouter";
import { Mail, Lock, User, Phone, Eye, EyeOff, ShoppingBag } from "lucide-react";

export default function Login() {
  const [location, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(!location.includes("register"));
  const [showPassword, setShowPassword] = useState(false);
  
  if (location.includes("register") && isLogin) setIsLogin(false);
  if (!location.includes("register") && !isLogin) setIsLogin(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: ""
  });

  const toggleAuthMode = (login: boolean) => {
    setIsLogin(login);
    setLocation(login ? "/login" : "/register");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/");
  };

  const handleGoogleLogin = () => {
    console.log("Google login initiated");
    setLocation("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MegaMenu />
      
      <main className="w-full mx-auto px-3 md:px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto items-start lg:items-center min-h-[calc(100vh-180px)]">
          {/* Left Side - Branding */}
          <div className="hidden lg:flex space-y-4 md:space-y-6 flex-col justify-center order-1">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="h-12 w-12 text-primary" />
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">JioKidz</h1>
                  <p className="text-sm text-gray-600">Asia's Largest Baby & Kids Store</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Exclusive Deals</h3>
                    <p className="text-sm text-gray-600">Get access to special offers and discounts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Fast Delivery</h3>
                    <p className="text-sm text-gray-600">Quick and reliable shipping across India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Easy Returns</h3>
                    <p className="text-sm text-gray-600">Hassle-free returns within 15 days</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">JioKidz Club</h3>
                    <p className="text-sm text-gray-600">Earn rewards on every purchase</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wide">Trusted by</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-2xl font-bold text-gray-700">10L+</span>
                  <span className="text-sm text-gray-600">Happy Parents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login/Signup Form */}
          <div className="w-full max-w-md mx-auto order-2">
            <Card className="p-4 md:p-6 lg:p-8 shadow-lg border-gray-200 rounded-xl bg-white">
              {/* Toggle Tabs */}
              <div className="flex gap-2 mb-6 md:mb-8 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => toggleAuthMode(true)}
                  className={`flex-1 py-2 md:py-3 px-3 md:px-4 rounded-md font-bold text-xs md:text-sm transition-all duration-300 ${
                    isLogin
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  LOGIN
                </button>
                <button
                  onClick={() => toggleAuthMode(false)}
                  className={`flex-1 py-2 md:py-3 px-3 md:px-4 rounded-md font-bold text-xs md:text-sm transition-all duration-300 ${
                    !isLogin
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  SIGN UP
                </button>
              </div>

              {/* Google Sign In - Primary Option */}
              <Button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full h-12 mb-6 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 font-semibold shadow-sm"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
                  alt="Google"
                  className="w-5 h-5 mr-3"
                />
                Continue with Google
              </Button>

              <div className="relative mb-6">
                <Separator className="my-0" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs text-gray-500 font-medium">
                  OR
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium text-xs md:text-sm">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 h-10 md:h-12 border-gray-300 focus:border-primary text-xs md:text-sm"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium text-xs md:text-sm">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-10 md:h-12 border-gray-300 text-xs md:text-sm focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium text-xs md:text-sm">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10 h-10 md:h-12 border-gray-300 text-xs md:text-sm focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium text-xs md:text-sm">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-10 md:h-12 border-gray-300 focus:border-primary text-xs md:text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 md:h-5 w-4 md:w-5" />
                      ) : (
                        <Eye className="h-4 md:h-5 w-4 md:w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="text-xs md:text-sm text-primary hover:underline font-medium"
                    >
                      Forgot Password?
                    </a>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-11 md:h-12 bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-6">
                By continuing, you agree to JioKidz's{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </Card>

            {/* Mobile Trust Badges */}
            <div className="lg:hidden mt-4 md:mt-6 grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200 text-center shadow-sm">
                <div className="text-xl md:text-2xl font-bold text-primary">10L+</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200 text-center shadow-sm">
                <div className="text-xl md:text-2xl font-bold text-primary">15 Days</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-1">Easy Returns</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
