import { FileText, DollarSign, Users, BarChart3, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "Invoice Management",
    description: "Create, customize, and send invoices in seconds. Track payment status and send automatic reminders.",
  },
  {
    icon: DollarSign,
    title: "Quotes & Proposals",
    description: "Generate professional quotes and proposals. Convert approved quotes into invoices with one click.",
  },
  {
    icon: Users,
    title: "Client & Product Management",
    description: "Store client details securely. Manage products and services with prices, tax, and discounts.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Download invoices as PDF. Export reports for accounting and GST filing with ease.",
  },
  {
    icon: Palette,
    title: "Branding & Templates",
    description: "Professional invoice templates. Customize with your logo, colors, and brand style.",
  },
  {
    icon: Zap,
    title: "Payment Integration",
    description: "Accept online payments via UPI, PayPal, Stripe, and Razorpay. Enable partial payments.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Invoice Like a Pro
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make invoicing simple, fast, and professional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
