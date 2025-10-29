import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Krishi Sahayak</span>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Powered by AI & Machine Learning — Krishi Sahayak provides real-time crop, weather, and market insights for India's farmers.
          </p>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2025 Krishi Sahayak. Empowering farmers through technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
