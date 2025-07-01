"use client"

import { motion } from "framer-motion"
import { Check, Star, Shield, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pricingTiers, comparisonFeatures } from "@/data/pricing-tiers"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our pricing plans
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={cn("text-sm", billingCycle === "monthly" ? "text-foreground font-semibold" : "text-muted-foreground")}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted"
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-primary transition",
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm", billingCycle === "yearly" ? "text-foreground font-semibold" : "text-muted-foreground")}>
              Yearly <span className="text-accent">Save 35%</span>
            </span>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => {
              const price = billingCycle === "yearly" ? Math.floor(tier.price * 0.65) : tier.price
              const originalPrice = billingCycle === "yearly" ? Math.floor(tier.originalPrice * 0.65) : tier.originalPrice
              
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
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
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold">${billingCycle === "yearly" ? (price / 12).toFixed(2) : price.toFixed(2)}</span>
                      <span className="text-muted-foreground">/m</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Price breakdown here
                    </p>
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

                  <Button
                    variant={tier.popular ? "cta" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    {tier.guarantee}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
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
                    <th className="text-center p-4">Empire</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="text-center p-4">{row.starter}</td>
                      <td className="text-center p-4 bg-primary/5">{row.pro}</td>
                      <td className="text-center p-4">{row.empire}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
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
              <h4 className="font-semibold mb-2">10,847+ Success Stories</h4>
              <p className="text-sm text-muted-foreground">
                Join thousands of creators earning $10K-$200K/month.
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
          </motion.div>

          {/* FAQ CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}