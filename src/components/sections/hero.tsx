"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { ArrowRight, PlayCircle, Users, TrendingUp, Shield, Zap, Star } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

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
          
          {/* Social Proof Badge */}
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
            <Users className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Join 500+ Creators Making $10K+/Mo</span>
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
            Build a{" "}
            <span className="text-primary">6-Figure Creator Business</span>
            <br />
            <span className="text-muted-foreground">using Our Proven Systems</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl"
          >
            Join{" "}
            <span className="font-semibold text-foreground">500+ Creators Unlocking $10K+/Mo</span>{" "}
            with Our Proven Content Creation System
          </motion.p>

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
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Now (Limited Spots Left)
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto group"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              See Proof →
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
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.05) }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium">30-DAY GUARANTEE</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3 bg-card/50 backdrop-blur border border-border rounded-full px-4 py-2"
            >
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-medium">INSTANT ACCESS</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium">LATEST TOOLS</span>
            </motion.div>
          </motion.div>

          {/* Hero Video Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative w-full max-w-4xl mt-12 rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setIsVideoModalOpen(true)}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <PlayCircle className="w-20 h-20 text-white relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Course Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}