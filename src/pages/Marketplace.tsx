import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Package, ShoppingCart, Leaf } from "lucide-react";

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState("sell");

  const buyers = [
    { name: "ABC Traders", location: "Ludhiana, Punjab", crop: "Wheat", quantity: "500 quintals", price: "₹2,300/quintal", distance: "12 km" },
    { name: "Green Harvest Co.", location: "Jalandhar, Punjab", crop: "Rice", quantity: "300 quintals", price: "₹3,200/quintal", distance: "25 km" },
    { name: "Punjab Agri Corp", location: "Amritsar, Punjab", crop: "Maize", quantity: "400 quintals", price: "₹1,900/quintal", distance: "35 km" },
  ];

  const suppliers = [
    { name: "Premium Seeds Co.", product: "Wheat Seeds (HD-2967)", price: "₹50/kg", location: "Ludhiana", rating: "4.8", verified: true },
    { name: "FertiFarm India", product: "NPK Fertilizer 20-20-20", price: "₹800/bag", location: "Chandigarh", rating: "4.6", verified: true },
    { name: "AgriTools Depot", product: "Sprinkler System", price: "₹12,000", location: "Jalandhar", rating: "4.7", verified: true },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Marketplace
          </h1>
          <p className="text-muted-foreground text-lg">
            Connect with buyers and suppliers in your region
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="sell" className="gap-2">
              <Package className="h-4 w-4" />
              Sell Crops
            </TabsTrigger>
            <TabsTrigger value="buy" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Buy Inputs
            </TabsTrigger>
          </TabsList>

          {/* Sell Crops Tab */}
          <TabsContent value="sell" className="space-y-8">
            {/* List Your Crop */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                List Your Crops
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Crop Type</label>
                  <Input placeholder="e.g., Wheat, Rice, Cotton" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Quantity (quintals)</label>
                  <Input type="number" placeholder="e.g., 500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Expected Price (per quintal)</label>
                  <Input placeholder="e.g., ₹2,300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
                  <Input placeholder="e.g., Ludhiana, Punjab" />
                </div>
              </div>

              <Button className="w-full md:w-auto bg-gradient-to-r from-primary to-accent">
                Post Listing
              </Button>
            </Card>

            {/* Nearby Buyers */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Verified Buyers Near You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {buyers.map((buyer, index) => (
                  <Card key={index} className="p-6 hover:shadow-card transition-all">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{buyer.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {buyer.location}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Looking for:</span>
                          <span className="font-medium text-foreground">{buyer.crop}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Quantity:</span>
                          <span className="font-medium text-foreground">{buyer.quantity}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Offering:</span>
                          <span className="font-semibold text-primary">{buyer.price}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Distance:</span>
                          <span className="text-accent font-medium">{buyer.distance}</span>
                        </div>
                      </div>

                      <Button className="w-full gap-2" variant="outline">
                        <Phone className="h-4 w-4" />
                        Contact Buyer
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Buy Inputs Tab */}
          <TabsContent value="buy" className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Verified Suppliers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suppliers.map((supplier, index) => (
                  <Card key={index} className="p-6 hover:shadow-card transition-all">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">{supplier.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {supplier.location}
                          </p>
                        </div>
                        {supplier.verified && (
                          <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                            Verified
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="text-foreground font-medium mb-1">{supplier.product}</p>
                        <p className="text-2xl font-bold text-primary">{supplier.price}</p>
                      </div>

                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium text-foreground">{supplier.rating}</span>
                        <span className="text-muted-foreground">(120+ reviews)</span>
                      </div>

                      <Button className="w-full gap-2" variant="outline">
                        <Phone className="h-4 w-4" />
                        Contact Supplier
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Trust Badge */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Safe & Verified Marketplace
            </h3>
            <p className="text-muted-foreground">
              All buyers and suppliers are verified by Krishi Sahayak to ensure secure transactions
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Marketplace;
