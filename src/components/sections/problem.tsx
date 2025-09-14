"use client"

import { motion } from "framer-motion"
import { XCircle, DollarSign, Zap, Users, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const painPoints = [
  {
    icon: Users,
    title: "Tired of managing freelancers and employees",
    description: "Coordinating editors, voice actors, and scriptwriters is a nightmare. Communication delays, quality issues, and constant revisions drain your time and energy.",
  },
  {
    icon: DollarSign,
    title: "Bleeding money on expensive team costs",
    description: "Quality editors cost $500-2000+ per video. Voice actors charge $100-500. Scriptwriters want $50-200. Your profit margins are getting crushed by team expenses.",
  },
  {
    icon: Bot,
    title: "No clear workflow from research to upload",
    description: "You need a complete system: AI for research → script → voice → edit → thumbnail → upload. But figuring out which tools work together and how to connect them is overwhelming.",
  },
  {
    icon: XCircle,
    title: "No clear system for profitable YouTube Automation channels",
    description: "You know YouTube Automation works, but where do you start? What niches are profitable? How do you scale without hiring a team? You need a proven step-by-step system.",
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
              Tired of Managing Freelancers?
              <br />
              <span className="text-primary">Use AI Instead</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get our Channel-in-a-Box framework: AI tools for research → script → voice → edit → thumbnail → upload. 
              <span className="font-semibold text-foreground">Follow the steps, plug in the tools, get publishing.</span>
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

          {/* Start Here Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-12 mb-16 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Build Your AI-Powered YouTube Automation Channel?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the complete Channel-in-a-Box framework with AI tools for every step—research to upload—without expensive teams.
            </p>
            <Link href="/pricing">
              <Button 
                variant="cta" 
                size="xl"
                className="mx-auto"
              >
                Start Here →
              </Button>
            </Link>
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
                  <h4 className="font-bold text-lg">Traditional YouTube Automation Approach</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive flex-shrink-0">→</span>
                    <span className="text-sm">Hiring expensive editors ($500-2000+ per video)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive flex-shrink-0">→</span>
                    <span className="text-sm">Managing voice actors and scriptwriters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive flex-shrink-0">→</span>
                    <span className="text-sm">Dealing with communication delays and revisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive flex-shrink-0">→</span>
                    <span className="text-sm">No systematic workflow from research to upload</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-destructive">Result: High costs, low profit margins</p>
                </div>
              </div>
            </div>

            {/* What Successful Creators Do */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl blur-xl" />
              <div className="relative bg-card border-2 border-accent/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                  <h4 className="font-bold text-lg">AI-Powered YouTube Automation Approach</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Complete 6-step Channel-in-a-Box framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">AI workflow: research → script → voice → edit → thumbnail → upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Plug-and-play system—follow steps, plug tools, get publishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Eliminate all team costs with complete AI automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span className="text-sm">Scale to multiple channels without hiring anyone</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-accent">Result: High profit margins, no team needed</p>
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
              Get the complete Channel-in-a-Box framework with AI tools for every step—
              from research to upload—no teams required.
            </p>
            <Link href="/pricing">
              <Button 
                variant="cta" 
                size="xl"
                className="mx-auto"
              >
                Yes, I Want The AI System →
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}