import { UserPlus, FileEdit, Send } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up Free",
    description: "No credit card required. Create your account in seconds and start invoicing immediately.",
  },
  {
    icon: FileEdit,
    title: "Create Your First Invoice",
    description: "Choose a template, add clients and products. Customize with your branding.",
  },
  {
    icon: Send,
    title: "Send & Get Paid",
    description: "Share invoice link, track payment status, and receive automatic notifications.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start invoicing professionally in minutes, not hours
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number and line */}
              <div className="relative flex flex-col items-center md:items-start">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/30">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-10 w-0.5 h-32 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-2xl p-8 shadow-lg border-2 border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
