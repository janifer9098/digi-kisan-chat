import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Empowering India's farmers through AI-driven insights and making advanced agricultural technology accessible to everyone.",
    },
    {
      icon: Users,
      title: "For Farmers",
      description: "Built by understanding real farming challenges. We bring data-driven decisions to help increase yields and profits.",
    },
    {
      icon: Zap,
      title: "Smart Technology",
      description: "Combining AI, machine learning, and real-time data to provide accurate crop advice, weather alerts, and market insights.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-3 bg-primary rounded-xl">
              <Leaf className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Krishi Sahayak
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted AI farming companion, dedicated to transforming agriculture in India through intelligent technology and farmer-first approach.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Empowering India's Farmers Through AI-Driven Insights
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Krishi Sahayak provides real-time crop, weather, and market insights powered by AI and machine learning. 
              We help farmers make informed decisions about what to grow, when to plant, and where to sell for maximum profit.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform combines satellite imagery, IoT sensors, weather data, and market intelligence to deliver 
              personalized recommendations in your language, making advanced agricultural technology accessible to all.
            </p>
          </div>
        </Card>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-card transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="p-8 md:p-12 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have questions or want to partner with us? We'd love to hear from you.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                <Input placeholder="Enter your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                <Input placeholder="Enter your phone" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
              <Input type="email" placeholder="Enter your email" />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <Textarea placeholder="How can we help you?" rows={5} />
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg py-6">
              Send Message
            </Button>
          </form>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: "10,000+", label: "Active Farmers" },
            { value: "25+", label: "Crops Supported" },
            { value: "15", label: "States Covered" },
            { value: "95%", label: "Accuracy Rate" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
