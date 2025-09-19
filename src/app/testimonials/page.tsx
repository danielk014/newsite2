import { Metadata } from "next"
import { SocialProofSection } from "@/components/sections/social-proof"
import { TestimonialStrip } from "@/components/ui/testimonial-strip"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See real results from Complete YouTube Automation Kit students",
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real <span className="text-primary">AI-Powered YouTube Automation Results</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See actual earnings from channels built using our complete automation kit
            </p>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn from <span className="text-primary">Successful AI-Powered YouTube Automation</span> Content Creators
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the complete YouTube Automation Kit with everything you need for successful channels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image 
                src="/testimonials/youtube-partner.png" 
                alt="YouTube Partnership Achievement"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">AI-Built Channel Monetized</h3>
                <p className="text-muted-foreground text-sm">Built entirely with AI tools—no human team</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image 
                src="/testimonials/earnings-6k.png" 
                alt="$6.2K Weekly Earnings"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">$6.2K Weekly AI Revenue</h3>
                <p className="text-muted-foreground text-sm">Zero team costs—100% AI-generated content</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img 
                src="/testimonials/channel-981k.png" 
                alt="981K Subscribers Channel"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">981K Subscribers</h3>
                <p className="text-muted-foreground text-sm">€100K monthly revenue with AI workflow</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow lg:col-span-2">
              <img 
                src="/testimonials/views-1m.png" 
                alt="1.1M Views Analytics"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">1.1M Views in 28 Days</h3>
                <p className="text-muted-foreground text-sm">999% growth using AI content system</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img 
                src="/testimonials/views-92m.png" 
                alt="92M Views Analytics"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">92M+ Total Views</h3>
                <p className="text-muted-foreground text-sm">AI-generated content going viral consistently</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Social Proof Section */}
      <SocialProofSection />

      {/* Additional Testimonial Strips */}
      <TestimonialStrip startIndex={0} title="AI YouTube Automation Success Stories" />
      <TestimonialStrip startIndex={4} title="From Teams to AI Transformations" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your AI-Powered YouTube Automation Channel?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join creators building successful channels with our complete automation kit
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
          >
            Start Your AI YouTube Automation System Today
          </a>
        </div>
      </section>
      
      {/* Earnings and Educational Disclaimers */}
      <section className="py-8 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-4 text-xs text-muted-foreground text-center">
            <p>
              <strong>EARNINGS DISCLAIMER:</strong> The income examples shown are not typical results. Most people who purchase online courses make little to no money. These results require significant time, effort, and skill. Individual results will vary greatly.
            </p>
            <p>
              <strong>EDUCATIONAL DISCLAIMER:</strong> This is an educational course about YouTube content creation. Results depend entirely on your effort, market conditions, and implementation. No earnings are guaranteed.
            </p>
            <p className="text-xs">
              *Individual results not typical. Most students do not achieve these results. Success requires significant effort and proper implementation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}