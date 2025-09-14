"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, Zap, Star, Bot, BadgeCheck, Sparkles, Check } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent -z-10" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
      />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 pt-20 pb-12 md:pt-24 md:pb-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          
          {/* Credibility Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            />
            <Bot className="w-4 h-4 relative z-10" />
            <span className="relative z-10 font-bold">AI-POWERED YOUTUBE AUTOMATION BLUEPRINT</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-1 -top-1"
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            The Complete <span className="text-primary">YouTube Automation Kit</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2 block">
              All-in-One System - No Team Required
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl"
          >
            Learn our <span className="font-semibold text-primary">Channel-in-a-Box framework</span>—leverage AI tools for every step: research, script, voice, edit, thumbnail, upload.
            <br />
            <span className="font-semibold text-foreground">Follow the steps, plug in the tools, get publishing.</span> No teams required.
          </motion.p>

          {/* Complete System Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 rounded-2xl p-6 max-w-2xl w-full backdrop-blur"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <h3 className="text-xl font-bold text-primary">Complete YouTube Automation Kit</h3>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <p className="text-center text-muted-foreground mb-3">
              Everything you need: AI tools, templates, and step-by-step system for profitable automation channels
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Complete AI Workflow</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Channel-in-a-Box System</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>Plug-and-Play Framework</span>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Includes AI Tool Stack & Templates (valued at $497)
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 gap-8 max-w-lg w-full"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">€100K+</div>
              <div className="text-sm text-muted-foreground">Monthly YouTube Automation Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">AI-Powered</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto group"
              onClick={() => window.location.href = '/pricing'}
            >
              Get Instant Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3 bg-card/50 backdrop-blur border border-border rounded-full px-4 py-2"
            >
              <BadgeCheck className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium">AI-POWERED SYSTEM</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium">30-DAY MONEY-BACK GUARANTEE</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3 bg-card/50 backdrop-blur border border-border rounded-full px-4 py-2"
            >
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-medium">NO TEAM NEEDED</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <Users className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium">AI TOOLS INCLUDED</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}