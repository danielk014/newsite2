"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, Zap, Star, Bot, BadgeCheck } from "lucide-react"

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
            Build a <span className="text-primary">$500K+ YouTube Business</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2 block">
              Solo with AI - No Team Required
            </span>
          </motion.h1>

          {/* Proof Point - YouTube Studio Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center mb-2">
              <span className="text-sm font-medium text-accent">Real Results - Built with this exact system</span>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-accent/30 shadow-2xl">
              <img 
                src="/testimonials/channel-981k.png" 
                alt="981,534 subscriber YouTube channel analytics showing 589.5M views, 5.4M watch hours, +849.3K subscribers, and US$65K estimated revenue"
                className="w-full h-auto"
              />
              <div className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-bold">
                ✓ VERIFIED
              </div>
            </div>
          </motion.div>



          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 w-full sm:w-auto text-center"
          >
            <p className="text-lg font-semibold text-foreground">
              Get the complete tool kit
            </p>
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto group"
              onClick={() => window.location.href = '/pricing'}
            >
              Get Instant Access - $5/month
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