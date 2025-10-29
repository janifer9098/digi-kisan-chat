import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Market = () => {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [selectedRegion, setSelectedRegion] = useState("punjab");

  const marketData = [
    { crop: "Wheat", price: 2250, change: 5.2, trend: "up", region: "Punjab" },
    { crop: "Rice", price: 3100, change: -2.1, trend: "down", region: "Punjab" },
    { crop: "Maize", price: 1850, change: 3.5, trend: "up", region: "Punjab" },
    { crop: "Cotton", price: 5600, change: 7.8, trend: "up", region: "Punjab" },
    { crop: "Sugarcane", price: 3200, change: 1.2, trend: "up", region: "Punjab" },
    { crop: "Soybean", price: 4100, change: -1.5, trend: "down", region: "Punjab" },
  ];

  const priceHistory = [
    { day: "Mon", price: 2140 },
    { day: "Tue", price: 2180 },
    { day: "Wed", price: 2200 },
    { day: "Thu", price: 2230 },
    { day: "Fri", price: 2210 },
    { day: "Sat", price: 2250 },
    { day: "Sun", price: 2250 },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Live Market Prices
          </h1>
          <p className="text-muted-foreground text-lg">
            Real-time mandi rates and price trends across India
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Select Crop</label>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="maize">Maize</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  <SelectItem value="soybean">Soybean</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Select Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="haryana">Haryana</SelectItem>
                  <SelectItem value="up">Uttar Pradesh</SelectItem>
                  <SelectItem value="mp">Madhya Pradesh</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-gradient-to-r from-primary to-accent">
                Update Prices
              </Button>
            </div>
          </div>
        </Card>

        {/* Price Trend Chart */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">7-Day Price Trend</h2>
          <div className="flex items-end justify-between h-64 gap-2">
            {priceHistory.map((item, index) => {
              const maxPrice = Math.max(...priceHistory.map(p => p.price));
              const height = (item.price / maxPrice) * 100;
              
              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-sm font-medium text-foreground">
                    ₹{item.price}
                  </div>
                  <div
                    className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  />
                  <div className="text-xs text-muted-foreground">{item.day}</div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Market Rates Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-foreground">Today's Rates</h2>
            <p className="text-sm text-muted-foreground">Per quintal (100 kg)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketData.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.crop}</h3>
                    <p className="text-sm text-muted-foreground">{item.region}</p>
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    item.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    {item.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {Math.abs(item.change)}%
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-3xl font-bold text-foreground">₹{item.price}</p>
                  <p className="text-sm text-muted-foreground">per quintal</p>
                </div>

                <div className={`text-sm ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {item.trend === "up" ? "↑" : "↓"} {item.trend === "up" ? "Increased" : "Decreased"} by ₹
                  {Math.round((item.price * Math.abs(item.change)) / 100)} this week
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA to Marketplace */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ready to Sell Your Crops?
              </h3>
              <p className="text-muted-foreground">
                Connect with verified buyers in your region and get the best price for your produce
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => navigate("/marketplace")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 gap-2"
            >
              Find Buyers <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Market;
