"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Bot, User, Cpu, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialImages } from "@/components/ui/testimonial-images"
import Link from "next/link"
import { useState } from "react"

const systemPillars = [
  {
    icon: Cpu,
    title: "Complete AI Workflow",
    description: "Master the 6-step Channel-in-a-Box framework: Research → Script → Voice → Edit → Thumbnail → Upload. Every step powered by AI.",
    features: [
      "AI research tools for trending topics",
      "Script generation with proven templates",
      "Voice synthesis and video editing automation"
    ]
  },
  {
    icon: Bot,
    title: "Plug-and-Play System",
    description: "No guesswork, no trial-and-error. Follow our exact framework, plug in the AI tools, and start publishing profitable content.",
    features: [
      "Step-by-step workflow templates",
      "Tool integration guides and setups",
      "Quality control checkpoints built-in"
    ]
  },
  {
    icon: DollarSign,
    title: "Scale the Framework",
    description: "Once you master the Channel-in-a-Box system, replicate it across multiple channels without hiring anyone.",
    features: [
      "Multi-channel workflow management",
      "AI-powered content multiplication",
      "Zero team costs at any scale"
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
              The Complete <span className="text-primary">YouTube Automation Kit</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              All-in-one system with AI tools, templates, and step-by-step training for profitable automation channels. 
              <span className="font-semibold text-foreground">Everything you need in one complete kit.</span>
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
              The 3-Pillar <span className="text-primary">Channel-in-a-Box Framework</span>
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
                      {index === 0 && "6"}
                      {index === 1 && "100%"}
                      {index === 2 && "∞"}
                    </div>
                    <p className="text-muted-foreground">
                      {index === 0 && "Step Framework"}
                      {index === 1 && "Plug-and-Play"}
                      {index === 2 && "Scalable"}
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
                    <h5 className="text-lg font-bold mb-2">Channel-in-a-Box Mastery</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete 6-step AI workflow: Research → Script → Voice → Edit → Thumbnail → Upload
                    </p>
                    <div className="space-y-2 text-left">
                      <p className="text-xs font-medium">Perfect for:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 6-step plug-and-play framework</li>
                        <li>• Every step powered by AI tools</li>
                        <li>• Follow steps → plug tools → start publishing</li>
                        <li>• Scale the framework infinitely</li>
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
                    <h5 className="text-lg font-bold mb-2">Advanced Framework Mastery</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Master advanced Channel-in-a-Box techniques with quality optimization layers
                    </p>
                    <div className="space-y-2 text-left">
                      <p className="text-xs font-medium">Includes:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Advanced workflow optimization</li>
                        <li>• Quality enhancement techniques</li>
                        <li>• Performance monitoring systems</li>
                        <li>• Framework scaling strategies</li>
                      </ul>
                    </div>
                  </motion.button>
                </div>
                
                {/* Path Explainer */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center max-w-3xl mx-auto">
                  <p className="text-xs md:text-sm">
                    <span className="font-semibold">💡 Pro Tip:</span> Most successful students start with the basic Channel-in-a-Box framework to get publishing quickly, 
                    then master advanced techniques to optimize and scale. You get access to BOTH levels with your enrollment!
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
                        <h5 className="font-semibold mb-1">YouTube Automation Foundation</h5>
                        <p className="text-sm text-muted-foreground mb-3">Set up profitable YouTube Automation channels with the right foundation</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• High-Profit Niche Selection for YouTube Automation</li>
                          <li>• Channel Setup & AI-Friendly Branding</li>
                          <li>• Legal & Compliance for Automated Content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">6-Step AI Framework</h5>
                        <p className="text-sm text-muted-foreground mb-3">Master each step of the Channel-in-a-Box system</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Step 1-2: AI Research & Script Generation</li>
                          <li>• Step 3: AI Video Creation Training - Create videos in minutes</li>
                          <li>• Step 4-5: Voice AI & Video Editing</li>
                          <li>• Step 6: Thumbnail AI & Auto-Upload</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Plug-and-Play Templates</h5>
                        <p className="text-sm text-muted-foreground mb-3">Ready-to-use templates for every framework step</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Research templates and tool setups</li>
                          <li>• Script frameworks and voice configurations</li>
                          <li>• Editing workflows and upload automation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Framework Multiplication</h5>
                        <p className="text-sm text-muted-foreground mb-3">Replicate the Channel-in-a-Box system across multiple channels</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Multi-channel framework management</li>
                          <li>• Workflow templates for different niches</li>
                          <li>• Infinite scaling without team costs</li>
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
                      <p className="font-semibold">AI-Powered YouTube Automation Community</p>
                      <p className="text-sm text-muted-foreground">Connect with 500+ YouTube Automation creators using AI tools</p>
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
                      <p className="font-semibold">Elite AI YouTube Automation Mastermind <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Network with 6-figure AI-powered YouTube Automation channel owners</p>
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
                      <p className="font-semibold">Complete AI Toolkit <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Ready-to-use AI tool integrations and workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">AI Tool Stack & Templates <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">BONUS</span></p>
                      <p className="text-sm text-muted-foreground">Complete integration templates and setup guides ($497 value)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">AI Tool Marketplace</p>
                      <p className="text-sm text-muted-foreground">Premium AI integrations and workflow templates</p>
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
              Ready to Build Your <span className="text-primary">AI-Powered YouTube Automation Channel</span>?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join entrepreneurs who have built <span className="font-semibold text-foreground">profitable YouTube Automation channels using AI</span> instead of expensive teams. 
              Master the AI tools that generate <span className="font-semibold text-foreground">consistent revenue</span> without team management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button 
                  variant="cta" 
                  size="xl"
                >
                  Get Started Today - $5/month
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
              See What Our AI-Powered YouTube Automation Students Are Achieving
            </h4>
            <TestimonialImages count={3} columns={3} startIndex={20} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}