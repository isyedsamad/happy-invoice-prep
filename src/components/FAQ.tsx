import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I use HappyInvoice for free forever?",
    answer: "Yes! Our Free plan is perfect for beginners and small freelancers who need basic invoicing. You can create up to 3 invoices per month with 5 clients and products forever, at no cost.",
  },
  {
    question: "How do I accept online payments?",
    answer: "Upgrade to our Plus plan to enable full payment integration. You'll be able to accept payments via UPI, Stripe, PayPal, and Razorpay. We also support partial payments for easier cash flow management.",
  },
  {
    question: "Can I customize invoice templates?",
    answer: "Absolutely! You can add your logo, customize colors, and personalize your invoices with your brand style. Essential and Plus plans offer more template options and complete branding removal.",
  },
  {
    question: "Is my data safe and secure?",
    answer: "Yes, security is our top priority. We use secure cloud storage with encryption to protect your data. Your invoices and client information are stored safely and backed up regularly.",
  },
  {
    question: "Can I export my invoices?",
    answer: "Yes! All plans include PDF export functionality. Plus plan users also get advanced reporting features for accounting and GST filing.",
  },
  {
    question: "What happens if I exceed my invoice limit?",
    answer: "If you reach your monthly invoice limit, you'll be prompted to upgrade to a higher plan. You can also wait until the next billing cycle, or upgrade temporarily for that month only.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-lg px-6 hover:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
