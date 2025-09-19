import { Button } from "@/components/ui/button"
import { ExternalLink, MessageCircle, FileText, Clock, CheckCircle } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              We stand behind our YouTube Automation Academy training with a comprehensive satisfaction policy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* 30-Day Satisfaction Policy */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">30-Day Satisfaction Policy</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                We stand behind our YouTube Automation Academy training. If you are not satisfied with your purchase, you may request a refund within 30 days of your purchase date.
              </p>
            </div>

            {/* Refund Conditions */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                Refund Conditions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>Refund requests must be submitted within 30 calendar days of purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>You must have completed at least 80% of the course materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>You must provide evidence of implementing the strategies taught</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>Digital products cannot be "returned" - access will be revoked upon refund</span>
                </li>
              </ul>
            </div>

            {/* Refund Process */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Refund Process</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Join our Discord server and open a support ticket with your order number</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Provide proof of course completion (screenshots of progress)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Show evidence of implementation attempts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <p className="font-semibold">Refunds issued to original payment method within 10 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Submit */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                How to Submit a Refund Request
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p>Join our Discord server using the button below</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p>Navigate to the #support-tickets channel</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p>Click "Create Ticket" and select "Refund Request"</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <p>Provide all required information and documentation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <p>Our support team will respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://discord.gg/FpnXz7FG7j" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="cta" 
                    size="lg"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Join Discord Server
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Non-Refundable Situations */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-destructive">Non-Refundable Situations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <span>Requests made after 30-day window</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <span>Incomplete course participation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <span>Violation of terms of service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <span>Chargebacks or payment disputes</span>
                </li>
              </ul>
            </div>

            {/* Partial Refunds */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Partial Refunds</h3>
              <p className="text-muted-foreground">
                Partial refunds may be considered on a case-by-case basis for extenuating circumstances.
              </p>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Questions about refunds?</h3>
              <p className="text-muted-foreground mb-6">
                Open a support ticket in our Discord server for immediate assistance.
              </p>
              <a 
                href="https://discord.gg/FpnXz7FG7j" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="cta" 
                  size="lg"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Support
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}