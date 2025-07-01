"use client"

import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, Ban, XCircle, Zap, ArrowDown, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const warnings = [
  {
    icon: Ban,
    title: "Posting at 'Peak Times'",
    status: "OUTDATED ADVICE",
    consequence: "Everyone posts then = maximum competition, minimum reach"
  },
  {
    icon: XCircle,
    title: "Chasing Trending Sounds",
    status: "AMATEUR MISTAKE",
    consequence: "By the time you post, the trend is dead"
  },
  {
    icon: TrendingDown,
    title: "Quantity Over Quality",
    status: "ALGORITHM KILLER",
    consequence: "Low engagement = permanent shadow ban"
  },
  {
    icon: AlertTriangle,
    title: "Buying Followers/Engagement",
    status: "CAREER SUICIDE",
    consequence: "Instant algorithm blacklist, no recovery possible"
  }
]

export function WarningSection() {
  return (
    <section className="py-20 md:py-32 bg-destructive/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Warning Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              <AlertTriangle className="w-4 h-4" />
              <span>Platform Algorithm Update Alert</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              WARNING: These "Strategies" Are Now <span className="text-destructive">Killing Careers</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The "expert" advice you're following? It's based on strategies that stopped 
              working years ago. Here's what's actually hurting your growth:
            </p>
          </motion.div>

          {/* Non-Compliant Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {warnings.map((warning, index) => (
              <motion.div
                key={warning.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-card border-2 border-destructive/20 rounded-xl p-6 relative"
              >
                <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  {warning.status}
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <warning.icon className="w-10 h-10 text-destructive flex-shrink-0" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 w-10 h-10 bg-destructive/20 rounded-full blur-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{warning.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowDown className="w-4 h-4 text-destructive animate-bounce" />
                      <p className="text-sm font-medium text-destructive">Result:</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{warning.consequence}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* The Shift Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              The Good News? There's a Better Way
            </h3>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                While most creators waste months on strategies that don't work, our students are 
                going viral within 30 days using a completely different approach.
              </p>
              
              <p className="text-lg font-medium">
                The secret? A <span className="text-primary">psychological content system</span> 
                that taps into what viewers actually want to watch and share.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 mt-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <BarChart3 className="w-20 h-20 text-primary/10" />
                </div>
                <p className="text-sm text-muted-foreground mb-2 relative z-10">
                  Student Success Rate:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4 relative z-10">
                  <div className="text-center">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-primary"
                    >
                      94%
                    </motion.p>
                    <p className="text-xs text-muted-foreground">Creator Camp Success</p>
                  </div>
                  <div className="text-center">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-destructive"
                    >
                      0.1%
                    </motion.p>
                    <p className="text-xs text-muted-foreground">Traditional Methods</p>
                  </div>
                </div>
                <p className="text-sm font-medium relative z-10">
                  "94% of Creator Camp students see their first viral video within 30 days"
                </p>
                <div className="flex items-center gap-2 mt-2 relative z-10">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    Based on analysis of 10,847 student results
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground">
              Ready to stop wasting time on strategies that don't work?
            </p>
            <p className="text-xl font-semibold text-primary mt-2 mb-8">
              Discover the system that actually creates viral content →
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