"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, DollarSign, Gift, Lock, User, EyeOff } from "lucide-react"
import { courseModules, bonuses } from "@/data/curriculum"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export function CurriculumSection() {
  const [expandedModule, setExpandedModule] = useState<string | null>("1")
  const [selectedPath, setSelectedPath] = useState<"personal" | "faceless" | null>(null)
  const totalValue = courseModules.reduce((sum, module) => sum + module.value, 0)

  // Separate modules by path
  const personalBrandModules = courseModules.filter(module => 
    ["1", "2", "3"].includes(module.id)
  )
  const facelessModules = courseModules.filter(module => 
    ["4", "5"].includes(module.id)
  )
  const sharedModules = courseModules.filter(module => 
    ["6", "7"].includes(module.id)
  )

  const displayModules = selectedPath === "personal" 
    ? [...personalBrandModules, ...sharedModules]
    : selectedPath === "faceless" 
    ? [...facelessModules, ...sharedModules]
    : courseModules

  return (
    <section id="curriculum" className="py-20 md:py-32 bg-muted/10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Choose Your <span className="text-primary">Learning Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two complete paths to content creation success. Pick the one that fits your goals.
            </p>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <DollarSign className="w-4 h-4" />
              <span>Total Value: ${totalValue.toLocaleString()}</span>
            </div>
          </div>

          {/* Path Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.button
              onClick={() => setSelectedPath(selectedPath === "personal" ? null : "personal")}
              className={`p-6 rounded-xl border-2 transition-all ${
                selectedPath === "personal" 
                  ? "border-primary bg-primary/10" 
                  : "border-border hover:border-primary/50 bg-card"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <User className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personal Brand Path</h3>
              <p className="text-muted-foreground mb-4">
                Build your personal brand and connect with your audience face-to-face
              </p>
              <div className="space-y-2 text-left">
                <p className="text-sm font-medium">Includes:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
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
                  : "border-border hover:border-primary/50 bg-card"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <EyeOff className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Faceless Content Path</h3>
              <p className="text-muted-foreground mb-4">
                Create content without showing your face - perfect for privacy-conscious creators
              </p>
              <div className="space-y-2 text-left">
                <p className="text-sm font-medium">Includes:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Faceless AI Short Form</li>
                  <li>• Faceless Clipping Course</li>
                  <li>• Monetization Course</li>
                  <li>• AI Tools (Bonus)</li>
                </ul>
              </div>
            </motion.button>
          </div>

          {/* Path Explainer */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-12 text-center">
            <p className="text-sm md:text-base">
              <span className="font-semibold">💡 Pro Tip:</span> Many creators start with the faceless path to build confidence and skills, 
              then transition to personal branding once they&apos;re comfortable. You get access to BOTH paths with your enrollment!
            </p>
          </div>

          {/* Course Modules */}
          <div className="space-y-4 mb-16">
            {displayModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </span>
                        <span className="text-accent font-semibold">
                          Value: ${module.value}
                        </span>
                      </div>
                    </div>
                    <div className={`transition-transform ${expandedModule === module.id ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {expandedModule === module.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="text-sm font-medium mb-3">What you&apos;ll learn:</p>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bonuses Section */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="text-center mb-8">
              <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Plus These Exclusive Bonuses
              </h3>
              <p className="text-muted-foreground">
                Only available when you enroll today
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-background/80 backdrop-blur rounded-lg p-4 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{bonus.title}</p>
                    <p className="text-sm text-muted-foreground">{bonus.description}</p>
                    <p className="text-sm font-semibold text-accent mt-1">Value: {bonus.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Locked Content Teaser */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center mb-12"
          >
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Plus Advanced Mastermind Content
            </h3>
            <p className="text-muted-foreground mb-6">
              Get access to our weekly live calls where we break down what&apos;s working RIGHT NOW. 
              See real campaigns, real numbers, and strategies you won&apos;t find anywhere else.
            </p>
            <Link href="/pricing">
              <Button 
                variant="cta" 
                size="lg"
              >
                Unlock Everything Now
              </Button>
            </Link>
          </motion.div>


        </div>
      </div>
    </section>
  )
}