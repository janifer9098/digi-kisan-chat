import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  onLearnMore?: () => void;
}

const FeatureCard = ({ icon: Icon, title, description, gradient, onLearnMore }: FeatureCardProps) => {
  return (
    <Card className="group relative overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
      
      <div className="relative p-6 space-y-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        
        {onLearnMore && (
          <Button
            variant="ghost"
            onClick={onLearnMore}
            className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
          >
            Learn More →
          </Button>
        )}
      </div>
    </Card>
  );
};

export default FeatureCard;
