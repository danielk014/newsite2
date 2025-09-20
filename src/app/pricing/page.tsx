"use client"

import React from "react"
import { PricingSection } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"

export default function PricingPage() {
  // Auto-scroll to pricing section when page loads
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join the <span className="text-primary">Creator Camp Community</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              500+ entrepreneurs supporting each other to build profitable faceless YouTube channels
            </p>
            
            {/* Community Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$2.1M+</div>
                <div className="text-sm text-muted-foreground">Collective Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Main Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Community Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Community Members</span> Are Saying
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from creators who found success and support in our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">💬</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-3">&quot;The community support here is incredible. I got my first viral video thanks to feedback from other members!&quot;</p>
                  <div className="text-xs font-semibold text-primary">- Sarah K. (127K subscribers)</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">🎯</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-3">&quot;Having accountability partners in the community helped me stay consistent. Now I&apos;m at $8K/month!&quot;</p>
                  <div className="text-xs font-semibold text-primary">- Mike R. (6-figure creator)</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">🚀</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-3">&quot;The live strategy sessions are pure gold. I learned tactics that took my channel from 0 to 50K in 3 months.&quot;</p>
                  <div className="text-xs font-semibold text-primary">- Alex T. (Automation Expert)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t build your YouTube empire alone. Get the training, tools, and community support you need to succeed.
          </p>
          <a
            href="https://buy.stripe.com/7sY5kE89Rem6cjCg5nfjG01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
          >
            Secure Your Community Access
          </a>
        </div>
      </section>
    </div>
  )
}