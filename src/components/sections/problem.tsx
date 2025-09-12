"use client"

import { motion } from "framer-motion"
import { XCircle, TrendingDown, DollarSign, Zap, Eye, Brain, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const painPoints = [
  {
    icon: Eye,
    title: "Terrified of showing your face on camera",
    description: "You want to create content but the thought of being on camera makes you anxious. Privacy concerns and camera shyness are holding you back.",
  },
  {
    icon: DollarSign,
    title: "Can't figure out how to make money without personal branding",
    description: "All the advice is about building a personal brand, but you want to stay anonymous. How do faceless creators actually make money?",
  },
  {
    icon: Brain,
    title: "Overwhelmed by the technical side of YouTube automation",
    description: "AI tools, automation software, outsourcing... it all seems too complex. You need a simple system that actually works.",
  },
  {
    icon: TrendingDown,
    title: "Wasting time on content that never gets views",
    description: "Without knowing what works, you're throwing content at the wall hoping something sticks. Meanwhile, others are hitting millions of views.",
  },
  {
    icon: XCircle,
    title: "Stuck in 0 view jail with no escape plan",
    description: "Your videos get 0-50 views no matter what you try. You're invisible on the platform while others effortlessly rack up thousands of views on their first upload.",
  },
]

// Removed stats section to maintain focus on problem identification

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
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Tired of Being Camera Shy?
              <br />
              <span className="text-primary">Go Faceless & Profitable</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how to build a profitable YouTube channel without ever showing your face or voice. 
              Learn the automation strategies that <span className="font-semibold text-foreground">generate passive income</span>.
            </p>
          </motion.div>

          {/* Stats section removed for cleaner focus */}

          {/* Pain Points Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.5 }}
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
            transition={{ duration: 0.2, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 border border-destructive/20 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="text-center space-y-6">
              <Flame className="w-16 h-16 text-destructive mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold">The Brutal Truth That May Surprise You</h3>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                <p className="text-lg">
                  <span className="font-semibold text-destructive">You don&apos;t need to show your face to make money on YouTube.</span>
                </p>
                <p className="text-lg text-muted-foreground">
                  You&apos;re struggling because you think you need to be a personality to succeed.
                </p>
                <p className="text-lg text-muted-foreground">
                  While you&apos;re avoiding YouTube because of camera anxiety, faceless creators are using 
                  <span className="font-semibold text-foreground"> automated systems</span> that generate 
                  <span className="font-semibold text-foreground"> millions of views</span> and 
                  <span className="font-semibold text-foreground"> passive income</span>.
                </p>
              </div>

              <div className="pt-6">
                <p className="text-xl font-semibold text-primary">
                  Top faceless YouTube channels? They&apos;re not more talented than you.
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  They just have access to the right automation system and tools.
                </p>
              </div>
              
              {/* AI Solution Teaser */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <p className="text-center text-lg font-semibold mb-2">
                  🤖 What if you could automate your entire YouTube channel?
                </p>
                <p className="text-center text-muted-foreground">
                  Our automation system handles content creation, optimization, and scaling - all without showing your face or using your voice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Comparison Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
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
                    <span className="text-destructive flex-shrink-0">→</span>
                    <span className="text-sm">Avoiding YouTube due to camera anxiety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive flex-shrink-0">→</span>
                    <span className="text-sm">Thinking you need a personal brand to succeed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive flex-shrink-0">→</span>
                    <span className="text-sm">Manual content creation with no automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive flex-shrink-0">→</span>
                    <span className="text-sm">No system for scaling without showing face</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-destructive">Result: Still camera shy and broke</p>
                </div>
              </div>
            </div>

            {/* What Successful Creators Do */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl blur-xl" />
              <div className="relative bg-card border-2 border-accent/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                  <h4 className="font-bold text-lg">What Faceless YouTubers Do</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Automate content creation with proven systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Stay anonymous while building profitable channels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Use AI and automation for 10x output</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Target profitable niches with data-driven content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Scale to multiple channels for passive income</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-accent">Result: Profitable faceless YouTube empire</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Stop Struggling. Start Winning.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get the complete automation system used by 
              profitable faceless YouTube channels worldwide.
            </p>
            <Link href="/pricing">
              <Button 
                variant="cta" 
                size="xl"
                className="mx-auto"
              >
                Yes, I Want The Automation System →
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}