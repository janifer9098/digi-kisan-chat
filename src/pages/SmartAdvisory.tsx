import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Download, MessageCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CropRecommendation {
  name: string;
  suitability: number;
  yield: string;
  marketPrice: string;
  tips: string[];
}

const SmartAdvisory = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([]);
  
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    soilType: "",
    waterSource: "",
    farmSize: "",
    pastCrop: "",
    investmentRange: "",
  });

  const states = ["Maharashtra", "Punjab", "Uttar Pradesh", "Madhya Pradesh", "Karnataka"];
  const soilTypes = ["Clay", "Sandy", "Loamy", "Alluvial", "Black", "Red"];
  const investmentRanges = ["Low (₹10k-50k)", "Medium (₹50k-2L)", "High (₹2L+)"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.state || !formData.district || !formData.soilType || !formData.waterSource || !formData.farmSize) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulated AI recommendations - will be replaced with actual AI call
      setTimeout(() => {
        const mockRecommendations: CropRecommendation[] = [
          {
            name: "Rice",
            suitability: 92,
            yield: "45-50 quintals/acre",
            marketPrice: "₹18-22/kg",
            tips: ["Use drip irrigation", "Sow in early July", "Apply organic fertilizer in week 4"]
          },
          {
            name: "Wheat",
            suitability: 88,
            yield: "35-40 quintals/acre",
            marketPrice: "₹20-25/kg",
            tips: ["Best for winter season", "Ensure proper drainage", "Use certified seeds"]
          },
          {
            name: "Cotton",
            suitability: 85,
            yield: "25-30 quintals/acre",
            marketPrice: "₹55-65/kg",
            tips: ["Requires medium investment", "Monitor for pests weekly", "Harvest in 5-6 months"]
          },
          {
            name: "Soybean",
            suitability: 82,
            yield: "20-25 quintals/acre",
            marketPrice: "₹45-50/kg",
            tips: ["Good for rainfed areas", "Nitrogen-fixing crop", "Low water requirement"]
          }
        ];
        
        setRecommendations(mockRecommendations);
        setIsLoading(false);
        
        toast({
          title: "Advisory Generated!",
          description: "Here are your personalized crop recommendations",
        });
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    }
  };

  const openChatbot = () => {
    const chatbotButton = document.querySelector('[data-chatbot-toggle]') as HTMLElement;
    if (chatbotButton) {
      chatbotButton.click();
    }
  };

  const downloadReport = () => {
    toast({
      title: "Download Started",
      description: "Your advisory report is being prepared...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Smart Crop Advisory
          </h1>
          <p className="text-muted-foreground text-lg">
            Get AI-powered crop recommendations tailored to your farm
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Farm Details</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">District *</Label>
                  <Input
                    id="district"
                    placeholder="Enter district"
                    value={formData.district}
                    onChange={(e) => setFormData({...formData, district: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type *</Label>
                <Select value={formData.soilType} onValueChange={(value) => setFormData({...formData, soilType: value})}>
                  <SelectTrigger id="soilType">
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    {soilTypes.map((soil) => (
                      <SelectItem key={soil} value={soil}>{soil}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Water Source *</Label>
                <RadioGroup value={formData.waterSource} onValueChange={(value) => setFormData({...formData, waterSource: value})}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rainfed" id="rainfed" />
                    <Label htmlFor="rainfed" className="cursor-pointer">Rainfed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="irrigation" id="irrigation" />
                    <Label htmlFor="irrigation" className="cursor-pointer">Irrigation</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size (acres) *</Label>
                <Input
                  id="farmSize"
                  type="number"
                  placeholder="Enter farm size"
                  value={formData.farmSize}
                  onChange={(e) => setFormData({...formData, farmSize: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pastCrop">Past Crop (optional)</Label>
                <Input
                  id="pastCrop"
                  placeholder="e.g., Rice, Wheat"
                  value={formData.pastCrop}
                  onChange={(e) => setFormData({...formData, pastCrop: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment">Investment Range *</Label>
                <Select value={formData.investmentRange} onValueChange={(value) => setFormData({...formData, investmentRange: value})}>
                  <SelectTrigger id="investment">
                    <SelectValue placeholder="Select investment range" />
                  </SelectTrigger>
                  <SelectContent>
                    {investmentRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Advisory...
                  </>
                ) : (
                  "Get Smart Advisory"
                )}
              </Button>
            </form>
          </Card>

          {/* Output Section */}
          <div className="space-y-6">
            {recommendations.length === 0 ? (
              <Card className="p-12 text-center shadow-lg">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">No Recommendations Yet</h3>
                  <p className="text-muted-foreground">
                    Fill in your farm details and click "Get Smart Advisory" to receive personalized crop recommendations
                  </p>
                </div>
              </Card>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-foreground">Recommended Crops</h2>
                  <Button variant="outline" size="sm" onClick={downloadReport}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </div>

                <div className="space-y-4">
                  {recommendations.map((crop, index) => (
                    <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🌾</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-foreground">{crop.name}</h3>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-primary text-primary" />
                              <span className="font-semibold text-foreground">{crop.suitability}%</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                            <div>
                              <span className="text-muted-foreground">Estimated Yield:</span>
                              <p className="font-medium text-foreground">{crop.yield}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Market Price:</span>
                              <p className="font-medium text-foreground">{crop.marketPrice}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">Quick Tips:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {crop.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="flex items-start gap-2">
                                  <span className="text-primary mt-0.5">•</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Need More Help?</h3>
                      <p className="text-sm text-muted-foreground">
                        Chat with Krishi Sahayak for personalized guidance
                      </p>
                    </div>
                    <Button onClick={openChatbot}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Ask Krishi Sahayak
                    </Button>
                  </div>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAdvisory;
