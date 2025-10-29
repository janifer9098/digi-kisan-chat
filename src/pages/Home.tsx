import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { Leaf, Droplet, Bug, TrendingUp, CloudRain, ShoppingBag, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-field.jpg";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Leaf,
      title: "Personal Crop Advice",
      description: "Get AI-powered crop recommendations based on your soil type, location, and weather patterns.",
      gradient: "from-primary to-green-600",
      path: "/dashboard",
    },
    {
      icon: Droplet,
      title: "Fertilizer Guidance",
      description: "Receive precise fertilizer recommendations with dosage and timing for optimal crop yield.",
      gradient: "from-accent to-blue-600",
      path: "/dashboard",
    },
    {
      icon: Bug,
      title: "Pest & Disease Alerts",
      description: "Upload crop photos for instant disease diagnosis and treatment solutions powered by AI.",
      gradient: "from-destructive to-red-600",
      path: "/dashboard",
    },
    {
      icon: BarChart3,
      title: "Yield Prediction",
      description: "Estimate your harvest quantities and plan your farming activities effectively.",
      gradient: "from-secondary to-yellow-600",
      path: "/dashboard",
    },
    {
      icon: CloudRain,
      title: "Weather Alerts",
      description: "Stay updated with real-time weather forecasts and rainfall predictions for your region.",
      gradient: "from-sky-500 to-blue-700",
      path: "/dashboard",
    },
    {
      icon: TrendingUp,
      title: "Market Prices",
      description: "Access live mandi rates and 7-day price trends to sell at the best time.",
      gradient: "from-green-500 to-emerald-700",
      path: "/market",
    },
    {
      icon: ShoppingBag,
      title: "Sell/Buy Crops",
      description: "Connect directly with buyers and suppliers. List your produce or find quality inputs.",
      gradient: "from-purple-500 to-indigo-600",
      path: "/marketplace",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Agricultural fields at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Your AI Farming Companion
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Grow Smarter with{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Krishi Sahayak
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Get personalized crop advice, pest alerts, fertilizer guidance, and live market updates — all in your language.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 rounded-xl shadow-card"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const chatbot = document.querySelector('[class*="Chatbot"]');
                  if (chatbot) {
                    (chatbot as HTMLElement).click();
                  }
                }}
                className="text-lg px-8 py-6 rounded-xl border-2"
              >
                Chat with Krishi Sahayak
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Farm Better
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI-powered tools designed specifically for Indian farmers to increase productivity and profits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                onLearnMore={() => navigate(feature.path)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of farmers already using AI to make smarter decisions and increase their yields.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-elevated"
          >
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
