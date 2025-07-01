"use client"

import { motion } from "framer-motion"
import { XCircle, TrendingDown, Clock, AlertTriangle, CheckCircle2, ArrowRight, Users, DollarSign, BarChart3, Target, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const painPoints = [
  {
    icon: XCircle,
    title: "Posting content that gets no views",
    description: "You're creating content but it feels like you're shouting into the void with minimal engagement.",
  },
  {
    icon: TrendingDown,
    title: "Watching others go viral while you struggle",
    description: "Seeing creators with less experience blow up while your content stays stuck at low view counts.",
  },
  {
    icon: Clock,
    title: "Working for months with no income",
    description: "Putting in the hours but not seeing any financial return on your content creation efforts.",
  },
  {
    icon: AlertTriangle,
    title: "Feeling lost in the algorithm",
    description: "The constant platform changes leave you confused about what actually works anymore.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-background/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Have You Been:
            </h2>
            <p className="text-xl text-muted-foreground">
              "Your current strategy…"
            </p>
            <p className="text-lg font-semibold text-destructive mt-2">
              Will keep you broke forever while others get ahead using insider secrets
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-background border border-destructive/20 rounded-lg p-6 text-left space-y-3"
              >
                <point.icon className="w-10 h-10 text-destructive" />
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-destructive/5 border border-destructive/20 rounded-xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Reality Check
            </h3>
            <p className="text-lg text-muted-foreground mb-2">
              Right now, someone with less talent, fewer connections, and less experience than you…
            </p>
            <p className="text-lg font-semibold mb-6">
              Is making more money in a month than you make in a year.
            </p>
            <p className="text-base text-muted-foreground mb-6">
              The only difference? They know something you don't.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl" />
                <div className="relative bg-card border border-primary/20 rounded-lg p-6">
                  <DollarSign className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-primary">They just know</p>
                  <p className="text-muted-foreground mt-2">which content pays</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-transparent rounded-lg blur-xl" />
                <div className="relative bg-card border border-destructive/20 rounded-lg p-6">
                  <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-primary">and which content</p>
                  <p className="text-muted-foreground mt-2">doesn't work</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-lg blur-xl" />
                <div className="relative bg-card border border-accent/20 rounded-lg p-6">
                  <Zap className="w-12 h-12 text-accent mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-primary">And today,</p>
                  <p className="text-muted-foreground mt-2">we're exposing the playbook</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Course Is For You Section - Visual Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              "This Course Is For You If you're tired of…"
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                viewport={{ once: true }}
                className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl text-destructive/10 font-bold">
                  <AnimatedCounter value={12} duration={1.5} />
                </div>
                <BarChart3 className="w-8 h-8 text-destructive mb-3" />
                <h4 className="font-semibold mb-2">Low Engagement</h4>
                <p className="text-sm text-muted-foreground">Posting content that gets 12 likes while others go viral daily</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                viewport={{ once: true }}
                className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl text-destructive/10 font-bold">📉</div>
                <Target className="w-8 h-8 text-destructive mb-3" />
                <h4 className="font-semibold mb-2">Analytics Anxiety</h4>
                <p className="text-sm text-muted-foreground">Feeling like a failure every time you check your analytics</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                viewport={{ once: true }}
                className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl text-destructive/10 font-bold">⏸️</div>
                <Shield className="w-8 h-8 text-destructive mb-3" />
                <h4 className="font-semibold mb-2">Stuck in Place</h4>
                <p className="text-sm text-muted-foreground">Pretending you're "building slowly" when really you're just stuck</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Agitation Statement with Visual Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl font-medium mb-4">
                The difference between you and successful creators <span className="text-destructive font-bold">isn't talent — it's knowledge.</span>
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-destructive to-primary"
                />
                <Users className="w-8 h-8 text-primary" />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </div>
            
            {/* Timeline Visualization */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-2 gap-8 items-center mb-8"
              >
                <div className="text-right">
                  <h4 className="font-bold text-lg mb-2">Today</h4>
                  <p className="text-muted-foreground"><AnimatedCounter value={200} duration={1.5} /> followers, minimal engagement</p>
                </div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <p className="text-sm font-medium">Keep doing what you're doing...</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-2 gap-8 items-center mb-8"
              >
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 order-2 md:order-1">
                  <p className="text-sm font-medium">Join Creator Camp Academy</p>
                </div>
                <div className="text-left order-1 md:order-2">
                  <h4 className="font-bold text-lg mb-2">
                    <AnimatedCounter value={30} duration={1.5} /> Days
                  </h4>
                  <p className="text-muted-foreground">First viral video, growing audience</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="text-right">
                  <h4 className="font-bold text-lg mb-2">
                    <AnimatedCounter value={12} duration={1.5} /> Months
                  </h4>
                  <p className="text-muted-foreground">Either stuck at <AnimatedCounter value={200} duration={1.5} /> followers...</p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm font-medium">Or making $<AnimatedCounter value={10} duration={2} />K+/month 🚀</p>
                </div>
              </motion.div>
            </div>
            
            <p className="text-lg font-semibold text-primary text-center mt-8">
              Are you going to be one of them, or are you going to keep hoping your current strategy magically starts working?
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12"
          >
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