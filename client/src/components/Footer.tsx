import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 w-full">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/jiokidz-logo.png" alt="JioKidz" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Asia's largest online baby and kids store. Quality products for every stage of your child's journey.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/category/boy-fashion" className="text-gray-400 hover:text-primary transition-colors text-sm">Shop</Link></li>
              <li><Link href="/orders" className="text-gray-400 hover:text-primary transition-colors text-sm">My Orders</Link></li>
              <li><Link href="/wishlist" className="text-gray-400 hover:text-primary transition-colors text-sm">Wishlist</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Track Order</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/boy-fashion" className="text-gray-400 hover:text-primary transition-colors text-sm">Boy Fashion</Link></li>
              <li><Link href="/category/girl-fashion" className="text-gray-400 hover:text-primary transition-colors text-sm">Girl Fashion</Link></li>
              <li><Link href="/category/toys" className="text-gray-400 hover:text-primary transition-colors text-sm">Toys</Link></li>
              <li><Link href="/category/diapering" className="text-gray-400 hover:text-primary transition-colors text-sm">Diapering</Link></li>
              <li><Link href="/category/gear" className="text-gray-400 hover:text-primary transition-colors text-sm">Gear</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:support@jiokidz.com" className="text-gray-400 hover:text-primary transition-colors text-sm">support@jiokidz.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-primary transition-colors text-sm">+91-9876-543-210</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-xs">
          <p>© {currentYear} JioKidz. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500" /> in India
          </div>
        </div>
      </div>

      {/* Newsletter Banner */}
      <div className="bg-gradient-to-r from-primary to-orange-500 text-white py-6">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold mb-1">Subscribe to Our Newsletter</h3>
            <p className="text-sm opacity-90">Get exclusive deals and updates delivered to your inbox</p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 sm:flex-none px-3 py-2 rounded text-gray-900 text-sm placeholder:text-gray-500"
            />
            <button className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded font-semibold text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
