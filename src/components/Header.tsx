import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-lg">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-clip-text">
            HappyInvoice
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
            Features
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
            Pricing
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost">Sign In</Button>
          <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
