"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Zap, Brain, Rocket, Target, Trophy, ArrowRight, Clock, TrendingUp, DollarSign, Users, BarChart3, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Rocket,
    title: "Find Your Niche",
    description: "'Gold-Mine' Niche Spotter, Niche Profit Tool, TrendBot - Used by top-earning creators to skip low-value niches",
  },
  {
    icon: Brain,
    title: "Make Content",
    description: "Creator Toolkit, AI Tool List, Viral Video Breakdowns, 30-Day Content Calendar - Everything you need to make content — all packed into one system",
  },
  {
    icon: Target,
    title: "Start Earning",
    description: "TikTok & YouTube Monetization Setup, Personal Brand Monetization Blueprint, Make Money With Clipping, Land Brand Deals - 500+ creators are making money using these exact systems",
  },
]

const transformations = [
  { before: "Zero views", after: "Viral videos" },
  { before: "No income", after: "$10K+/month" },
  { before: "Lost in algorithm", after: "Algorithm mastery" },
  { before: "Random posting", after: "Strategic system" },
]

export function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
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
              This Is The <span className="text-primary">ONLY</span> System That Shows You:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3"
              >
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">10-Minute Niche Finder</h4>
                  <p className="text-sm text-muted-foreground">Find profitable niches in under 10 minutes</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3"
              >
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Conversion Content</h4>
                  <p className="text-sm text-muted-foreground">Content types that convert followers to customers</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3"
              >
                <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">The 1% Secret</h4>
                  <p className="text-sm text-muted-foreground">Why 99% stay broke & the 1% secret</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3"
              >
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Viral Editing Styles</h4>
                  <p className="text-sm text-muted-foreground">Exact editing styles that make content go viral</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* What Happens Next - Visual Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">HERE'S WHAT HAPPENS NEXT:</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Join Today Path */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl blur-xl" />
                <div className="relative bg-card border-2 border-accent/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                    <h4 className="font-bold text-lg">If you join today:</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Week 1-2</p>
                        <p className="text-sm text-muted-foreground">Implement proven system</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">30</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Day 30</p>
                        <p className="text-sm text-muted-foreground">See improved metrics & first viral video</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">3-6</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Months 3-6</p>
                        <p className="text-sm text-muted-foreground">Build sustainable $10K+/mo income</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Wait Path */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-transparent rounded-xl blur-xl" />
                <div className="relative bg-card border-2 border-destructive/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="w-8 h-8 text-destructive" />
                    <h4 className="font-bold text-lg">If you wait:</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">⏸</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Keep struggling</p>
                        <p className="text-sm text-muted-foreground">Same strategy, same results</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">👀</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Watch others succeed</p>
                        <p className="text-sm text-muted-foreground">Competitors use proven methods</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">📉</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Stay stuck</p>
                        <p className="text-sm text-muted-foreground">Still at 200 followers in a year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 3-Step Creator Growth System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold">The 3-step Creator Growth System</h3>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto relative">
                      <feature.icon className="w-8 h-8 text-primary" />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                      viewport={{ once: true }}
                      className="h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full mx-auto"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


          {/* Unique Mechanism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              A Proven System That Helps Creators Win
            </h3>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Complete Clipper Course:</span> Discover viral moments instantly,
                  edit in seconds, and launch polished clips everywhere
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Personal Brand Course:</span> Learn pro-level video creation,
                  grow a standout personal brand, and monetize your content
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">"Fix My Channel" Audit:</span> We'll review your content and
                  hand you a clear, actionable list of exactly what to fix to grow
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto"
              >
                Join Now!
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto"
              >
                See Everything You'll Learn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}