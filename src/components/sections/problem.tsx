"use client"

import { motion } from "framer-motion"
import { XCircle, TrendingDown, DollarSign, Zap, Eye, Brain, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MiniTestimonials } from "@/components/ui/testimonial-card"

const painPoints = [
  {
    icon: Eye,
    title: "Stuck at 200 views while others hit millions",
    description: "You post consistently but your content barely gets seen. Meanwhile, creators who started after you are going viral daily.",
  },
  {
    icon: DollarSign,
    title: "Zero revenue despite months of effort",
    description: "You're creating content for free while others monetize from day one. The algorithm works for them, not you.",
  },
  {
    icon: Brain,
    title: "Burning out from creating content nobody watches",
    description: "Hours spent filming, editing, posting... for what? 50 views? You're exhausted and ready to quit.",
  },
  {
    icon: TrendingDown,
    title: "Lost in outdated strategies that don't work",
    description: "Following guru advice from 2019 that's completely irrelevant. The game has changed but nobody told you.",
  },
]

const struggles = [
  { stat: "87%", description: "of creators quit within 6 months" },
  { stat: "93%", description: "never make their first $100" },
  { stat: "99%", description: "stay under 1,000 followers forever" },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-background/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Let&apos;s Be Honest...
              <br />
              <span className="text-destructive">Your Content Strategy Isn&apos;t Working</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              While you&apos;re stuck at 200 views, we&apos;re generating millions. 
              The difference? We know the game. You&apos;re still learning the rules.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 md:gap-8 mb-16"
          >
            {struggles.map((struggle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-destructive mb-2">{struggle.stat}</div>
                <p className="text-sm md:text-base text-muted-foreground">{struggle.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pain Points Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-card border border-destructive/20 rounded-lg p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <point.icon className="w-10 h-10 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* The Real Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 border border-destructive/20 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="text-center space-y-6">
              <Flame className="w-16 h-16 text-destructive mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold">The Brutal Truth Nobody Will Tell You</h3>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                <p className="text-lg">
                  <span className="font-semibold text-destructive">You&apos;re not failing because you lack talent.</span>
                </p>
                <p className="text-lg text-muted-foreground">
                  You&apos;re failing because you&apos;re using strategies from 2019 in 2024.
                </p>
                <p className="text-lg text-muted-foreground">
                  While you&apos;re following outdated YouTube tutorials, successful creators are using 
                  <span className="font-semibold text-foreground"> proven systems</span> that generate 
                  <span className="font-semibold text-foreground"> millions of views</span> and 
                  <span className="font-semibold text-foreground"> real revenue</span>.
                </p>
              </div>

              <div className="pt-6">
                <p className="text-xl font-semibold text-primary">
                  The creators making $10K+/month? They&apos;re not smarter than you.
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  They just have access to the right playbook.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Comparison Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* What You're Doing */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-transparent rounded-xl blur-xl" />
              <div className="relative bg-card border-2 border-destructive/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-8 h-8 text-destructive" />
                  <h4 className="font-bold text-lg">What You&apos;re Doing Now</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">→</span>
                    <span className="text-sm">Random posting hoping something sticks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">→</span>
                    <span className="text-sm">Following generic &quot;post 3x daily&quot; advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">→</span>
                    <span className="text-sm">Creating content nobody asked for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">→</span>
                    <span className="text-sm">Zero monetization strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">→</span>
                    <span className="text-sm">Burning out for 47 views</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-destructive">Result: Still broke in 12 months</p>
                </div>
              </div>
            </div>

            {/* What Successful Creators Do */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl blur-xl" />
              <div className="relative bg-card border-2 border-accent/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                  <h4 className="font-bold text-lg">What Top Creators Do</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm">Use viral clipping strategies that work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm">Build personal brands that convert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm">Leverage AI to 10x output without burnout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm">Create content people actually want</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm">Monetize from day one</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-accent">Result: $10K+/month within 6 months</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Stop Struggling. Start Winning.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the exact blueprint that generated 2+ billion views and built 
              multiple 6-figure creator businesses.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="mx-auto"
            >
              Yes, I Want The Blueprint →
            </Button>
          </motion.div>

          {/* Mini Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <MiniTestimonials
              testimonials={[
                {
                  quote: "I went from 500 views to 2.5M in 30 days using the clipping strategy",
                  author: "Sarah M.",
                  result: "Now making $15K/month"
                },
                {
                  quote: "The AI tools alone saved me 40 hours per week. Game changer!",
                  author: "Mike T.",
                  result: "Scaled to 500K subs in 3 months"
                },
                {
                  quote: "Finally quit my 9-5 after hitting $10K/month consistently",
                  author: "Jessica R.",
                  result: "Full-time creator in 90 days"
                }
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}