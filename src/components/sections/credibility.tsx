"use client"

import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Users, Eye, Award, BarChart3, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { value: "Easy", label: "To Digest Course Content", icon: Eye },
  { value: "100+", label: "Active Students", icon: Users },
  { value: "4.8/5", label: "Student Rating", icon: Award },
  { value: "24/7", label: "Support Access", icon: TrendingUp },
]

const caseStudyPoints = [
  "Analytics Review & Performance Analysis - Identify what works in your niche",
  "Data-Driven Content Decisions - Use metrics to guide your strategy",
  "Audience Research & Behavior Analysis - Understand your viewers deeply",
  "Content Optimization Based on Engagement Patterns",
  "Strategic Posting & Distribution for Maximum Reach",
]

export function CredibilitySection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
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
              We Don&apos;t Just Teach Viral Content...
              <br />
              <span className="text-primary">We Create It</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team has years of experience in content creation and digital marketing. 
              We share proven strategies that help creators build sustainable audiences.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center"
              >
                <div className="bg-card border border-border rounded-lg p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Case Study Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Creator Success Story</h3>
                  <p className="text-muted-foreground">How our framework drives real results</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">The Challenge:</h4>
                  <div className="text-muted-foreground mb-6 space-y-2">
                    <p><strong>• Stuck at 200 views</strong> while others hit millions</p>
                    <p><strong>• Zero revenue</strong> despite months of effort</p>
                    <p><strong>• Burning out</strong> creating content nobody watches</p>
                    <p><strong>• Lost in outdated strategies</strong> that don&apos;t work</p>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-4 text-primary">Our Content Strategy:</h4>
                  <div className="space-y-3">
                    {caseStudyPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3">The Results:</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-3xl font-bold text-primary">Optimized</span>
                          <span className="text-sm text-muted-foreground">growth</span>
                        </div>
                        <div className="w-full bg-background rounded-full h-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.2, delay: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="bg-primary h-2 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-3xl font-bold text-primary">Strategic</span>
                          <span className="text-sm text-muted-foreground">content approach</span>
                        </div>
                        <div className="w-full bg-background rounded-full h-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.2, delay: 0.7 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="bg-accent h-2 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <BarChart3 className="w-8 h-8 text-accent mb-3" />
                    <p className="text-sm font-medium">
                      &quot;The same strategic frameworks our successful students use are now 
                      available to you. Learn from real-world experience and proven methods.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-lg font-medium mb-6">
                  Ready to transform your content creation journey?
                </p>
                <Link href="/pricing">
                  <Button 
                    variant="cta" 
                    size="lg"
                    className="mx-auto block"
                  >
                    Get The Exact Blueprint
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}