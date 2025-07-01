"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressIndicatorProps {
  steps: {
    label: string
    value: string
    isActive?: boolean
    icon?: React.ReactNode
  }[]
  className?: string
}

export function ProgressIndicator({ steps, className }: ProgressIndicatorProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Progress Line */}
      <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
      />
      
      {/* Steps */}
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
              step.isActive 
                ? "bg-primary border-primary text-primary-foreground" 
                : "bg-background border-border"
            )}>
              {step.icon || <span className="text-sm font-bold">{index + 1}</span>}
            </div>
            <p className="text-sm font-medium mt-2">{step.label}</p>
            <p className="text-xs text-muted-foreground">{step.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}