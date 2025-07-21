"use client"

import { motion } from "framer-motion"
import { Clock, Users, TrendingUp, AlertTriangle, Flame } from "lucide-react"
import { useCountdown } from "@/hooks/useCountdown"
import { Button } from "@/components/ui/button"

export function UrgencySection() {
  // Set countdown to 48 hours from now
  const targetDate = new Date()
  targetDate.setHours(targetDate.getHours() + 48)
  
  const timeLeft = useCountdown(targetDate)

  const spotsLeft = 23 // This would normally come from a database

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-destructive/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Urgency Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              <AlertTriangle className="w-4 h-4" />
              <span>Limited Time Offer Ending Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              This Special Price <span className="text-destructive">Expires In...</span>
            </h2>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-destructive/20 rounded-2xl p-8 mb-12"
          >
            <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-destructive to-destructive/80 text-white rounded-lg p-4 md:p-6 mb-2">
                    <span className="text-3xl md:text-5xl font-bold">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scarcity Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold mb-1">{spotsLeft} Spots Left</p>
              <p className="text-sm text-muted-foreground">For this cohort</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <TrendingUp className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="text-2xl font-bold mb-1">$872/month Increase</p>
              <p className="text-sm text-muted-foreground">After timer ends</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <Flame className="w-10 h-10 text-destructive mx-auto mb-3" />
              <p className="text-2xl font-bold mb-1">847 Watching</p>
              <p className="text-sm text-muted-foreground">Right now</p>
            </motion.div>
          </div>

          {/* Warning Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 md:p-8 mb-12"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-destructive" />
              Why The Rush?
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>We only accept 100 new students per month to maintain quality support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Price increases to $997/month after this timer (that&apos;s $872 MORE per month)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Bonuses worth $1,988 are removed after this timer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Next cohort won&apos;t start for another 30 days</span>
              </li>
            </ul>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="space-y-3 mb-12"
          >
            <p className="text-center text-sm text-muted-foreground mb-4">Recent Activity:</p>
            {[
              { name: "Jessica from California", time: "2 minutes ago" },
              { name: "Michael from New York", time: "5 minutes ago" },
              { name: "Ashley from Texas", time: "11 minutes ago" },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-muted/50 rounded-lg p-3 text-sm text-center"
              >
                <span className="font-medium">{activity.name}</span> just enrolled •{' '}
                <span className="text-muted-foreground">{activity.time}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg font-semibold mb-6">
              Don&apos;t let another opportunity pass you by. Your competition is signing up right now.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              className="animate-pulse"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Claim Your Spot Before It&apos;s Gone
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              🔒 Secure checkout • 30-day guarantee • Instant access
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}