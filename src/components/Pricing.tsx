import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    priceUSD: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "3 invoices per month",
      "5 clients & products",
      "Basic templates",
      "PDF export",
    ],
    limitations: [
      "No online payments",
      "Basic email support",
      "HappyInvoice branding",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Essential",
    price: "₹79",
    priceUSD: "$1",
    period: "per month",
    description: "For growing freelancers",
    features: [
      "10 invoices per month",
      "15 clients & products",
      "2 premium themes",
      "Partial payments",
      "Email support",
      "Remove branding",
      "Payment reminders",
    ],
    cta: "Get Essential",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "₹199",
    priceUSD: "$4.99",
    period: "per month",
    description: "For businesses & power users",
    features: [
      "Unlimited invoices",
      "Unlimited clients & products",
      "All premium templates",
      "Full payment integration",
      "UPI, Stripe, PayPal, Razorpay",
      "Priority support",
      "Advanced reports",
      "Custom branding",
    ],
    cta: "Upgrade to Plus",
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Pricing. No Surprises.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative animate-scale-in ${
                plan.highlighted 
                  ? "border-4 border-primary shadow-2xl shadow-primary/20 scale-105" 
                  : "border-2"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/ {plan.priceUSD}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations?.map((limitation, i) => (
                    <li key={`limit-${i}`} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="h-5 w-5 opacity-30 mt-0.5 flex-shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? "bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50" 
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
