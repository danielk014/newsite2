"use client"

import { motion } from "framer-motion"
import { Sparkles, Brain, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const tools = [
  {
    name: "InsightSync - AI Revenue Analytics",
    url: "https://insight-sync.onrender.com/",
    icon: TrendingUp,
    description: "The only analytics platform that shows you exactly how much money your YouTube channel should be making, with AI-powered insights to maximize your content performance and revenue.",
    features: [
      "Real-time revenue potential calculator",
      "AI-powered content optimization suggestions",
      "Competitor revenue analysis & benchmarking",
      "Predictive analytics for future earnings",
      "Performance gap identification",
      "Content monetization strategies"
    ],
    value: "$997 value"
  },
  {
    name: "Advanced AI Script Writer & Analyzer",
    url: "#",
    icon: Brain,
    description: "Revolutionary AI tool that both writes viral scripts AND analyzes them for maximum impact. Generate perfect content every time with our dual-powered system.",
    features: [
      "Generate viral scripts in seconds",
      "Deep script analysis with improvement suggestions",
      "Psychological trigger identification & optimization",
      "Viral potential scoring before you record",
      "Multi-platform optimization (YouTube, TikTok, Instagram)",
      "Auto-adapts to your unique voice and style"
    ],
    value: "$697 value"
  }
]

// Removed unused facelessBenefits constant

export function SaasToolsSection() {
  return (
    <section className="pt-10 md:pt-16 pb-20 md:pb-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>PRO TIER EXCLUSIVE • Not Available Anywhere Else</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Your Unfair Advantage: <span className="text-primary">AI-Powered Creator Tools</span>
              <span className="block text-lg md:text-xl text-muted-foreground mt-2">(Pro Tier Exclusive)</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop guessing what content will work. Our exclusive AI suite analyzes millions of data points 
              to tell you exactly what to create, when to post, and how much money you should be making
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-card border-2 border-primary/20 rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {tool.value}
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <tool.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-end">
                  <p className="text-xs text-muted-foreground">Pro Tier Only</p>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold mb-2">
              Combined SaaS Value: $1,694
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Included FREE with Creator Camp PRO tier
            </p>
            <p className="text-sm font-medium mb-8">
              These tools alone pay for the entire course in your first month
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Pro Access Now!
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}