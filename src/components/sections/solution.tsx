"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Scissors, Bot, BadgeCheck, User, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialImages } from "@/components/ui/testimonial-images"
import Link from "next/link"
import { useState } from "react"

const systemPillars = [
  {
    icon: BadgeCheck,
    title: "Personal Brand Blueprint",
    description: "Build a personal brand that converts viewers into customers. Stop chasing vanity metrics.",
    features: [
      "Position yourself as the authority",
      "Create content people actually want",
      "Become a viral entertainer & educator"
    ]
  },
  {
    icon: Scissors,
    title: "Viral Clipping Mastery",
    description: "Turn any long-form content into viral gold. Our proven clipping strategy generated 1 billion views/month.",
    features: [
      "Identify viral moments in seconds",
      "Edit like a pro with our templates",
      "Distribute across all platforms automatically"
    ]
  },
  {
    icon: Bot,
    title: "AI-Powered Creator Tools",
    description: "Exclusive access to our AI suite that analyzes millions of data points to maximize your revenue and content performance.",
    features: [
      "InsightSync: See exactly how much money you should be making",
      "Advanced AI Script Writer & Analyzer: Generate AND analyze scripts",
      "Predict viral potential before wasting time recording"
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
              Introducing: The <span className="text-primary">Complete Creator System</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive framework for building engaging content and growing 
              your online presence sustainably. Learn from proven strategies.
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
              The 3-Pillar Creator System
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
                      {index === 0 && "Quick"}
                      {index === 1 && "100+"}
                      {index === 2 && "4.8"}
                    </div>
                    <p className="text-muted-foreground">
                      {index === 0 && "To Start"}
                      {index === 1 && "Active Students"}
                      {index === 2 && "Average Rating"}
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
              Everything You Need to Succeed
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
                    <User className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h5 className="text-lg font-bold mb-2">Personal Brand Path</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Build your personal brand and connect with your audience face-to-face
                    </p>
                    <div className="space-y-2 text-left">
                      <p className="text-xs font-medium">Includes:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Personal Brand Lab</li>
                        <li>• Personal Brand Long Form</li>
                        <li>• Personal Brand Short Form</li>
                        <li>• Monetization Course</li>
                        <li>• AI Tools (Bonus)</li>
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
                    <EyeOff className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h5 className="text-lg font-bold mb-2">Faceless Content Path</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create content without showing your face - perfect for privacy-conscious creators
                    </p>
                    <div className="space-y-2 text-left">
                      <p className="text-xs font-medium">Includes:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Faceless AI Short Form</li>
                        <li>• Faceless Clipping Course</li>
                        <li>• Monetization Course</li>
                        <li>• AI Tools (Bonus)</li>
                      </ul>
                    </div>
                  </motion.button>
                </div>
                
                {/* Path Explainer */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center max-w-3xl mx-auto">
                  <p className="text-xs md:text-sm">
                    <span className="font-semibold">💡 Pro Tip:</span> Many creators start with the faceless path to build confidence and skills, 
                    then transition to personal branding once they're comfortable. You get access to BOTH paths with your enrollment!
                  </p>
                </div>
              </div>

              {/* Core Training Modules */}
              <div className="text-center">
                <h4 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                  <span className="text-2xl">🎯</span> CORE TRAINING MODULES
                </h4>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Personal Brand Lab</h5>
                        <p className="text-sm text-muted-foreground mb-3">Build your authority and convert followers to customers</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Finding Your Unique Creator Identity & Positioning</li>
                          <li>• Building Authority in Any Niche (Even Saturated Ones)</li>
                          <li>• Converting Followers to Customers with Strategic Content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Viral Clip Mastery</h5>
                        <p className="text-sm text-muted-foreground mb-3">The exact system that generated 2B+ views</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• The &apos;Viral Moment Spotter&apos; - Find Gold in Any Content</li>
                          <li>• Hook Psychology: Why Some Clips Get 10M+ Views</li>
                          <li>• Multi-Platform Distribution Strategy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Editing Tutorials</h5>
                        <p className="text-sm text-muted-foreground mb-3">Pro-level editing techniques that hook viewers</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Professional editing workflows & shortcuts</li>
                          <li>• Hooks, transitions & retention strategies</li>
                          <li>• No expensive software required</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 text-left">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold mb-1">Monetization System</h5>
                        <p className="text-sm text-muted-foreground mb-3">Learn to monetize your content effectively</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• The 5 Revenue Streams Every Creator Needs</li>
                          <li>• Landing $5K+ Brand Deals (With Email Templates)</li>
                          <li>• Scaling your creator business sustainably</li>
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
                      <p className="font-semibold">General Chat & Wins Feed</p>
                      <p className="text-sm text-muted-foreground">Connect with 100+ successful creators</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Profile Reviews <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Get expert feedback on your content</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Elite Chat Access <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Network with top performers</p>
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
                      <p className="font-semibold">Creator Toolkit <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Done-for-you templates and editing plugins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">AI Tools Suite <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-[10px] font-medium">PRO ONLY</span></p>
                      <p className="text-sm text-muted-foreground">Automate content creation without burnout ($1,694/mo value)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Tool Shop</p>
                      <p className="text-sm text-muted-foreground">Exclusive tools with Creator Camp coins</p>
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
              Ready to Join the 1% of Creators Who Actually Make Money?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop watching from the sidelines. Get the proven system that creates 
              viral content and builds profitable personal brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button 
                  variant="cta" 
                  size="xl"
                >
                  Get Instant Access
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
              See What Our Students Are Achieving
            </h4>
            <TestimonialImages count={3} columns={3} startIndex={20} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}