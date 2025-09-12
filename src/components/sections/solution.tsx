"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Bot, User, EyeOff, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialImages } from "@/components/ui/testimonial-images"
import Link from "next/link"
import { useState } from "react"

const systemPillars = [
  {
    icon: EyeOff,
    title: "Faceless Channel Setup",
    description: "Build profitable YouTube channels without ever showing your face or using your voice. Complete privacy protection.",
    features: [
      "Niche selection for maximum profitability",
      "Anonymous channel branding and setup",
      "Voice-over alternatives and AI narration"
    ]
  },
  {
    icon: Bot,
    title: "Content Automation System",
    description: "Automate your entire content creation workflow. Our system generates engaging videos while you sleep.",
    features: [
      "AI script generation for trending topics",
      "Automated video creation and editing",
      "Multi-platform distribution and scheduling"
    ]
  },
  {
    icon: DollarSign,
    title: "Monetization & Scaling",
    description: "Turn your faceless channels into profit machines. Learn to scale to multiple channels for passive income.",
    features: [
      "Multiple revenue stream optimization",
      "Outsourcing and team building strategies",
      "Advanced scaling to 6-figure income"
    ]
  },
]


export function SolutionSection() {
  const [selectedPath, setSelectedPath] = useState<"personal" | "faceless" | null>(null)
  
  return (
    <section className="pt-20 md:pt-32 pb-10 md:pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              The Complete <span className="text-primary">YouTube Automation System</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete automation system for building profitable faceless YouTube channels. 
              Generate passive income without showing your face or voice using <span className="font-semibold text-foreground">proven automation</span>.
            </p>
          </motion.div>


          {/* 3-Pillar System */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8 mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              The 3-Pillar <span className="text-primary">Automation System</span>
            </h3>
            
            {systemPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-card border border-border rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <pillar.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{pillar.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Module {index + 1}</span>
                          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                          <span>Instant Access</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{pillar.description}</p>
                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''} text-center`}>
                  <div className="inline-block">
                    <div className="text-6xl font-bold text-primary mb-2">
                      {index === 0 && "$50K+"}
                      {index === 1 && "500+"}
                      {index === 2 && "24/7"}
                    </div>
                    <p className="text-muted-foreground">
                      {index === 0 && "Monthly Revenue"}
                      {index === 1 && "Faceless Channels"}
                      {index === 2 && "Automation"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Everything You Need to <span className="text-primary">Succeed</span>
            </h3>
            
            <div className="space-y-8">
              {/* Learning Paths */}
              <div className="text-center">
                <h4 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                  <span className="text-2xl">🎯</span> CHOOSE YOUR LEARNING PATH
                </h4>
                
                {/* Path Selection */}
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
                  <motion.button
                    onClick={() => setSelectedPath(selectedPath === "personal" ? null : "personal")}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      selectedPath === "personal" 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50 bg-background"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h5 className="text-lg font-bold mb-2">YouTube Automation Mastery</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Build scalable faceless content systems for maximum passive income
                    </p>
                    <div className="space-y-2 text-left">
                      <p className="text-xs font-medium">Perfect for:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Scale without showing your face</li>
                        <li>• Perfect for introverts or privacy-focused creators</li>
                        <li>• Build multiple income streams simultaneously</li>
                        <li>• Location and time freedom</li>
                      </ul>
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={() => setSelectedPath(selectedPath === "faceless" ? null : "faceless")}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      selectedPath === "faceless" 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50 bg-background"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h5 className="text-lg font-bold mb-2">Semi-Automated Path</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Keep some personal control while automating the heavy lifting
                    </p>
                    <div className="space-y-2 text-left">
                      <p className="text-xs font-medium">Includes:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Content Planning Tools</li>
                        <li>• Semi-Automated Creation</li>
                        <li>• Personal Review Process</li>
                        <li>• Growth Optimization</li>
                      </ul>
                    </div>
                  </motion.button>
                </div>
                
                {/* Path Explainer */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center max-w-3xl mx-auto">
                  <p className="text-xs md:text-sm">
                    <span className="font-semibold">💡 Pro Tip:</span> Most successful students start with full automation to generate income quickly, 
                    then use semi-automation to scale further. You get access to BOTH approaches with your enrollment!
                  </p>
                </div>
              </div>

              {/* Core Training Modules - Updated with detailed content */}
              <div className="text-center">
                <h4 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                  <span className="text-2xl">🎯</span> CORE TRAINING MODULES
                </h4>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Faceless Channel Foundation</h5>
                        <p className="text-sm text-muted-foreground mb-3">Set up profitable channels without revealing your identity</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• High-Profit Niche Selection & Research</li>
                          <li>• Anonymous Channel Setup & Branding</li>
                          <li>• Privacy Protection & Security Measures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">AI Content Creation</h5>
                        <p className="text-sm text-muted-foreground mb-3">Automate video creation using advanced AI tools</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• AI Script Generation for Trending Topics</li>
                          <li>• Automated Video Assembly & Editing</li>
                          <li>• Voice Synthesis & Narration Options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Automation Workflows</h5>
                        <p className="text-sm text-muted-foreground mb-3">Set up systems that run your channel automatically</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Content scheduling & publishing automation</li>
                          <li>• Thumbnail generation & optimization</li>
                          <li>• Analytics tracking & performance optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Scaling & Outsourcing</h5>
                        <p className="text-sm text-muted-foreground mb-3">Build a team and scale to multiple profitable channels</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Team Building & Virtual Assistant Training</li>
                          <li>• Multi-Channel Management Systems</li>
                          <li>• Advanced Revenue Optimization Strategies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community */}
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                  <span className="text-2xl">💬</span> COMMUNITY ACCESS
                </h4>
                <div className="max-w-2xl mx-auto space-y-4">
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Faceless Creators Community</p>
                      <p className="text-sm text-muted-foreground">Connect with 500+ anonymous YouTube entrepreneurs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Channel Reviews <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Get expert feedback on your automation setup</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Elite Automation Mastermind <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Network with 6-figure faceless channel owners</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                  <span className="text-2xl">🛠️</span> RESOURCES & TOOLS
                </h4>
                <div className="max-w-2xl mx-auto space-y-4">
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Automation Toolkit <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Done-for-you automation scripts and workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Exclusive AI Content Generator <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">BONUS</span></p>
                      <p className="text-sm text-muted-foreground">Our proprietary AI tools that accelerate your success ($297/mo value)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Automation Marketplace</p>
                      <p className="text-sm text-muted-foreground">Premium automation tools and scripts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Build Your <span className="text-primary">YouTube Empire</span>?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join entrepreneurs who have built <span className="font-semibold text-foreground">profitable faceless channels</span> using our proven system. 
              Master the strategies that generate <span className="font-semibold text-foreground">consistent revenue</span> without showing your face.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button 
                  variant="cta" 
                  size="xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/course">
                <Button 
                  variant="outline" 
                  size="xl"
                >
                  See Course Content
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-20"
          >
            <h4 className="text-xl font-bold text-center mb-8">
              See What Our Faceless Students Are Achieving
            </h4>
            <TestimonialImages count={3} columns={3} startIndex={20} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}