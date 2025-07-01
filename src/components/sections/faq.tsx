"use client"

import { motion } from "framer-motion"
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react"
import { faqs } from "@/data/faqs"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function FAQSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["1"])

  const toggleItem = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions? We've Got Answers</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              FAQ
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold pr-2">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        expandedItems.includes(faq.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                {expandedItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Trust Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Our 'Go Viral Or It's Free' Guarantee
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Use our AI tools and faceless system for 30 days. If you don't see explosive growth,
              get 100% of your money back. We've created 500+ millionaires. You're next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Risk-Free Today
              </Button>
            </div>
          </motion.div>

          {/* Additional Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-8">
              Still have questions? Email us at{' '}
              <a href="mailto:support@creatorcamp.academy" className="text-primary hover:underline">
                support@creatorcamp.academy
              </a>
              {' '}and we'll respond within 24 hours.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Now!
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}