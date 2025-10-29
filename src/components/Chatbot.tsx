import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { MessageCircle, X, Send, Mic, Leaf, Droplet, Bug, CloudRain, TrendingUp, ShoppingCart } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "नमस्ते! मैं कृषि सहायक हूं। आपकी कैसे मदद कर सकता हूं? / Namaste! I'm Krishi Sahayak. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickActions = [
    { icon: Leaf, label: "Crop Suggestion", value: "Suggest best crops for my region" },
    { icon: Droplet, label: "Fertilizer Help", value: "What fertilizer should I use?" },
    { icon: Bug, label: "Detect Disease", value: "Help me identify a crop disease" },
    { icon: TrendingUp, label: "Market Prices", value: "Show current market prices" },
    { icon: CloudRain, label: "Weather Update", value: "What's the weather forecast?" },
    { icon: ShoppingCart, label: "Sell/Buy Crop", value: "I want to sell my crops" },
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, { role: "user", content: inputValue }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thank you for your question. I'm analyzing your request and will provide personalized recommendations based on your location, soil type, and current weather conditions. How can I assist you further?",
        },
      ]);
    }, 1000);

    setInputValue("");
  };

  const handleQuickAction = (value: string) => {
    setInputValue(value);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 rounded-full h-16 w-16 shadow-elevated hover:scale-110 transition-transform bg-gradient-to-br from-primary to-accent"
          data-chatbot-toggle
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-elevated flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4 text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Krishi Sahayak</h3>
                <p className="text-xs opacity-90">AI Farming Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-border bg-card">
            <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
            <div className="grid grid-cols-3 gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickAction(action.value)}
                  className="flex flex-col h-auto py-2 gap-1"
                >
                  <action.icon className="h-4 w-4" />
                  <span className="text-[10px] text-center leading-tight">{action.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card flex gap-2">
            <Button variant="outline" size="icon" className="shrink-0">
              <Mic className="h-4 w-4" />
            </Button>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
