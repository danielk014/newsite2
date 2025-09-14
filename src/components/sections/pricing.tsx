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
              Get the complete Channel-in-a-Box framework: AI tools for research → script → voice → edit → thumbnail → upload
            </p>
          </div>

          {/* Why We Dominate Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Channel-in-a-Box <span className="text-primary">Beats Everything Else</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Complete 6-step framework: Follow the steps, plug in the AI tools, get publishing. No guesswork.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">6</div>
                  <div className="text-sm text-muted-foreground">AI-Powered Steps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Plug-and-Play</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">€100K+</div>
                  <div className="text-sm text-muted-foreground">Framework Potential</div>
                </div>
              </div>
            </div>
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
                    {tier.id === 'elite' ? (
                      <>
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-primary">Application Only</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Premium 1-on-1 coaching program
                        </p>
                      </>
                    ) : tier.price > 0 ? (
                      <>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold">
                            {tier.id === "pro" ? "€" : "$"}{Math.round(tier.billingPeriod === "year" ? tier.price : displayPrice)}
                          </span>
                          <span className="text-muted-foreground">/{tier.billingPeriod === "year" ? "year" : "month"}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {tier.billingPeriod === "year" ? (
                            "Billed annually"
                          ) : billingCycle === "yearly" ? (
                            <>
                              <span className="line-through text-muted-foreground/60">
                                {tier.id === "pro" ? "€" : "$"}{Math.round(monthlyPrice)}/month
                              </span>
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
                    <div className="space-y-3">
                      {billingCycle === "monthly" ? (
                        <button 
                          style={{
                            fontFamily: 'sans-serif',
                            margin: '0 auto',
                            outline: 'none',
                            display: 'block',
                            height: '45px',
                            width: '226px',
                            borderRadius: '6px',
                            background: '#FF6B35',
                            color: 'white',
                            boxShadow: '1px 1px 3px 0 rgba(0,0,0,.03)',
                            fontSize: '18px',
                            fontWeight: '700',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                          className="lp6362577318051840 lpbtn"
                          data-monthly="true"
                        >
                          Pay Monthly €49.00
                        </button>
                      ) : (
                        <button 
                          style={{
                            fontFamily: 'sans-serif',
                            margin: '0 auto',
                            outline: 'none',
                            display: 'block',
                            height: '45px',
                            width: '226px',
                            borderRadius: '6px',
                            background: '#FF6B35',
                            color: 'white',
                            boxShadow: '1px 1px 3px 0 rgba(0,0,0,.03)',
                            fontSize: '18px',
                            fontWeight: '700',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                          className="lp6362577318051840 lpbtn"
                          data-yearly="true"
                        >
                          Pay Yearly €384.00
                        </button>
                      )}
                    </div>
                  ) : tier.id === "starter" ? (
                    <a 
                      href={billingCycle === "yearly" ? "https://buy.stripe.com/aFaeVfe9Af3meRP9Zk8ww02" : "https://buy.stripe.com/cNi9AV8PgcVe10Z0oK8ww01"} 
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
                      href="https://forms.gle/GdQpiHqi28FH1CeY7" 
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
                    <th className="text-center p-4">Network Member</th>
                    <th className="text-center p-4 bg-primary/5">Elite Network</th>
                    <th className="text-center p-4">VIP Inner Circle</th>
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
                30-day money-back guarantee if you complete the first module and don&apos;t see value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Channel-in-a-Box Framework</h4>
              <p className="text-sm text-muted-foreground">
                Complete 6-step system with AI tools for every step included.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Instant Framework Access</h4>
              <p className="text-sm text-muted-foreground">
                Get immediate access to the complete workflow and tool setups.
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
              {" "}or email support@aiytacourse.com
            </p>
            <p className="text-sm text-muted-foreground">
              🔒 Secure checkout powered by LaunchPass. All major cards accepted.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              *Guarantee requires completion of Module 1 within 30 days. Full terms at checkout.
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-3xl mx-auto">
              **Educational disclaimer: This course teaches AI tool integration for YouTube Automation channels. Success depends on individual effort, tool implementation, and market factors. Results are not guaranteed and will vary based on your execution and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}