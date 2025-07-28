"use client"
import { Check, Star, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pricingTiers, comparisonFeatures } from "@/data/pricing-tiers"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section id="pricing" className="pt-4 pb-20 md:pt-6 md:pb-32 bg-gradient-to-b from-background via-primary/5 to-background relative">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div
            className="text-center space-y-4 mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our pricing plans
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={cn("text-sm", billingCycle === "monthly" ? "text-foreground font-semibold" : "text-muted-foreground")}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
              style={{ backgroundColor: billingCycle === "yearly" ? "#16C79A" : "hsl(var(--muted))" }}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200",
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm", billingCycle === "yearly" ? "text-foreground font-semibold" : "text-muted-foreground")}>
              Yearly <span className="text-accent">Save 35%</span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier) => {
              const monthlyPrice = tier.price
              const yearlyPrice = tier.price * 12 * 0.65 // 35% discount
              const displayPrice = billingCycle === "yearly" ? yearlyPrice / 12 : monthlyPrice
              
              return (
                <div
                  key={tier.id}
                  className={cn(
                    "relative bg-card border rounded-2xl p-8",
                    tier.popular ? "border-primary shadow-2xl shadow-primary/20" : "border-border"
                  )}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        🔥 Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  </div>

                  <div className="text-center mb-8">
                    {tier.price > 0 ? (
                      <>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold">${Math.round(tier.billingPeriod === "year" ? tier.price : displayPrice)}</span>
                          <span className="text-muted-foreground">/{tier.billingPeriod === "year" ? "year" : "month"}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {tier.billingPeriod === "year" ? (
                            "Billed annually"
                          ) : billingCycle === "yearly" ? (
                            <>
                              <span className="line-through text-muted-foreground/60">${Math.round(monthlyPrice)}/month</span>
                              {" "}
                              <span className="text-accent font-semibold">Billed annually</span>
                            </>
                          ) : (
                            "Billed monthly"
                          )}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="mb-2">
                          <span className="text-2xl font-bold">Custom Pricing</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Contact us for enterprise pricing
                        </p>
                      </>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 text-left">
                        <Check className={cn(
                          "w-5 h-5 flex-shrink-0 mt-0.5",
                          feature.startsWith("Everything") ? "text-primary" : "text-accent"
                        )} />
                        <span className={cn(
                          "text-sm flex-1",
                          feature.startsWith("Everything") ? "font-semibold" : ""
                        )}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {tier.id === "pro" ? (
                    <a 
                      href="https://buy.stripe.com/7sY5kE89Rem6cjCg5nfjG01" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant={tier.popular ? "cta" : "outline"}
                        size="lg"
                        className="w-full"
                      >
                        {tier.cta}
                      </Button>
                    </a>
                  ) : tier.id === "starter" ? (
                    <a 
                      href={billingCycle === "yearly" ? "https://buy.stripe.com/3cIaEYeyfa5QcjC2exfjG03" : "https://buy.stripe.com/7sYcN6dub6TEdnG2exfjG00"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant={tier.popular ? "cta" : "outline"}
                        size="lg"
                        className="w-full"
                      >
                        {tier.cta}
                      </Button>
                    </a>
                  ) : tier.id === "elite" ? (
                    <a 
                      href="https://buy.stripe.com/dRmdRa3TB6TEabuf1jfjG04" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant={tier.popular ? "cta" : "outline"}
                        size="lg"
                        className="w-full"
                      >
                        {tier.cta}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant={tier.popular ? "cta" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  )}

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    {tier.guarantee}
                  </p>
                </div>
              )
            })}
          </div>


          {/* Comparison Table */}
          <div
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Compare Plans & Features
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">Starter</th>
                    <th className="text-center p-4 bg-primary/5">Pro</th>
                    <th className="text-center p-4">Elite Coaching</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="text-center p-4">{row.starter}</td>
                      <td className="text-center p-4 bg-primary/5">{row.pro}</td>
                      <td className="text-center p-4">{row.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trust Elements */}
          <div
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Money-Back Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                30-90 day guarantee depending on your plan. No questions asked.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">500+ Students</h4>
              <p className="text-sm text-muted-foreground">
                Join hundreds of creators earning $10K-$200K/month.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Instant Access</h4>
              <p className="text-sm text-muted-foreground">
                Start learning immediately. AI tools activated in seconds.
              </p>
            </div>
          </div>

          {/* FAQ CTA */}
          <div
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              Questions? Check our{" "}
              <button
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary hover:underline"
              >
                FAQ section
              </button>
              {" "}or email support@creatorcamp.academy
            </p>
            <p className="text-sm text-muted-foreground">
              🔒 Secure checkout powered by Stripe. All major cards accepted.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}