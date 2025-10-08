import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
            Create Professional Invoices in Seconds. Get Paid Faster.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Manage invoices, quotes, and proposals with ease—no more messy spreadsheets or late payments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-lg px-8 py-6 group"
            >
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-secondary/50 text-lg px-8 py-6 group"
            >
              <Play className="mr-2 h-5 w-5" />
              See it in Action
            </Button>
          </div>

          {/* Mock dashboard preview */}
          <div className="relative mt-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-border/50 bg-card">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 text-center text-sm font-medium text-muted-foreground">
                  HappyInvoice Dashboard
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-secondary/30 to-background p-8">
                {/* Placeholder for dashboard mockup */}
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="col-span-2 bg-card rounded-lg shadow-md p-4 space-y-3">
                    <div className="h-4 bg-primary/20 rounded w-1/3" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                    <div className="h-3 bg-muted rounded w-4/6" />
                    <div className="mt-4 space-y-2">
                      <div className="h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded" />
                      <div className="h-8 bg-muted/50 rounded" />
                      <div className="h-8 bg-muted/50 rounded" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-card rounded-lg shadow-md p-4">
                      <div className="h-3 bg-accent/40 rounded w-2/3 mb-2" />
                      <div className="h-6 bg-primary/20 rounded" />
                    </div>
                    <div className="bg-card rounded-lg shadow-md p-4">
                      <div className="h-3 bg-accent/40 rounded w-2/3 mb-2" />
                      <div className="h-6 bg-primary/20 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
