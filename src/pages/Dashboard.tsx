import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Droplet, Bug, TrendingUp, CloudRain, BarChart3, Camera } from "lucide-react";

const Dashboard = () => {
  const insights = [
    {
      icon: Leaf,
      title: "Recommended Crops",
      value: "Rice, Wheat, Maize",
      description: "Based on your soil type (loamy) and current season",
      gradient: "from-primary to-green-600",
      action: "View Details",
    },
    {
      icon: Droplet,
      title: "Fertilizer Schedule",
      value: "NPK 20-20-20",
      description: "Apply 50kg per acre next week for optimal growth",
      gradient: "from-accent to-blue-600",
      action: "See Schedule",
    },
    {
      icon: Bug,
      title: "Pest Alert",
      value: "Low Risk",
      description: "No major pest activity detected in your area",
      gradient: "from-green-500 to-emerald-600",
      action: "Upload Photo",
    },
    {
      icon: BarChart3,
      title: "Yield Forecast",
      value: "4.5 tons/acre",
      description: "Expected harvest for wheat crop in 60 days",
      gradient: "from-secondary to-yellow-600",
      action: "View Prediction",
    },
    {
      icon: CloudRain,
      title: "Weather Today",
      value: "28°C, Partly Cloudy",
      description: "40% chance of rain tomorrow afternoon",
      gradient: "from-sky-500 to-blue-700",
      action: "7-Day Forecast",
    },
    {
      icon: TrendingUp,
      title: "Market Prices",
      value: "₹2,250/quintal",
      description: "Wheat prices up 5% this week in your region",
      gradient: "from-green-500 to-emerald-700",
      action: "View Trends",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back, Farmer!
          </h1>
          <p className="text-muted-foreground text-lg">
            Here's your personalized farming dashboard for today
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-2 hover:border-primary hover:text-primary"
          >
            <Camera className="h-6 w-6" />
            <span className="text-sm">Scan Crop</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-2 hover:border-primary hover:text-primary"
          >
            <TrendingUp className="h-6 w-6" />
            <span className="text-sm">Market</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-2 hover:border-primary hover:text-primary"
          >
            <CloudRain className="h-6 w-6" />
            <span className="text-sm">Weather</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col gap-2 hover:border-primary hover:text-primary"
          >
            <Leaf className="h-6 w-6" />
            <span className="text-sm">Ask AI</span>
          </Button>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-card transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${insight.gradient} flex items-center justify-center`}>
                    <insight.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">{insight.title}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{insight.value}</h3>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>

                <Button variant="ghost" className="w-full text-primary hover:text-primary/80">
                  {insight.action} →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Assistant Prompt */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Need Personalized Advice?
              </h3>
              <p className="text-muted-foreground">
                Ask Krishi Sahayak anything about crops, weather, fertilizers, or market prices
              </p>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Chat Now
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
