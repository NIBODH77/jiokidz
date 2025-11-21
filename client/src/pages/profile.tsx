import { Header } from "@/components/Header";
import { MegaMenu } from "@/components/MegaMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";
import { User, Mail, Phone, MapPin, LogOut, Edit2, Heart, Package, Settings } from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const { user, logout, updateProfile } = useAuth();
  const [, setLocation] = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || ""
  });

  if (!user) {
    setLocation("/login");
    return null;
  }

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <Header />
      <MegaMenu />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">
                    {isEditing ? (
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="text-3xl font-bold mb-2"
                      />
                    ) : (
                      user.name
                    )}
                  </h1>
                  <p className="text-gray-600">JioKidz Valued Member</p>
                  <div className="mt-3 flex gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> Wishlist</span>
                    <span className="flex items-center gap-1"><Package className="w-4 h-4" /> Orders</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                {!isEditing ? (
                  <>
                    <Button
                      onClick={() => setIsEditing(true)}
                      variant="outline"
                      className="gap-2"
                    >
                      <Edit2 className="w-4 h-4" /> Edit Profile
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="destructive"
                      className="gap-2"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                      Save Changes
                    </Button>
                    <Button onClick={() => setIsEditing(false)} variant="outline">
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Information */}
            <Card className="p-8 shadow-sm border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-primary" />
                Account Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-gray-300"
                    />
                  ) : (
                    <div className="flex items-center gap-3 text-gray-800 bg-gray-50 p-4 rounded-lg">
                      <Mail className="w-5 h-5 text-gray-400" />
                      {user.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  {isEditing ? (
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-gray-300"
                    />
                  ) : (
                    <div className="flex items-center gap-3 text-gray-800 bg-gray-50 p-4 rounded-lg">
                      <Phone className="w-5 h-5 text-gray-400" />
                      {user.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                  <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-4 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm">Add your delivery address</p>
                      <Button variant="link" className="text-primary p-0 h-auto">Add Address</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Orders */}
            <Card className="p-8 shadow-sm border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Package className="w-6 h-6 text-primary" />
                Recent Orders
              </h2>
              <div className="text-center py-12">
                <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No orders yet</p>
                <p className="text-sm text-gray-400 mt-1">Start shopping to see your orders here</p>
                <Button className="mt-4 bg-primary hover:bg-primary/90">
                  Continue Shopping
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* JioKidz Club */}
            <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <h3 className="font-bold text-gray-900 mb-2">JioKidz Club Member</h3>
              <p className="text-sm text-gray-600 mb-4">Earn rewards on every purchase and get exclusive deals</p>
              <div className="bg-white/80 rounded-lg p-3 text-center mb-4">
                <p className="text-xs text-gray-600">Points Balance</p>
                <p className="text-2xl font-bold text-primary">2,450</p>
              </div>
              <Button variant="outline" className="w-full">View Rewards</Button>
            </Card>

            {/* Security */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Security
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-left">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  Manage Devices
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  Privacy Settings
                </Button>
              </div>
            </Card>

            {/* Wishlist */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Your Wishlist
              </h3>
              <p className="text-sm text-gray-600 mb-4">You have 0 items in your wishlist</p>
              <Button variant="outline" className="w-full text-primary">
                View Wishlist
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
