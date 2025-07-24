import { Metadata } from "next"
import { CurriculumSection } from "@/components/sections/curriculum"
import { SaasToolsSection } from "@/components/sections/saas-tools"
import { TestimonialStrip } from "@/components/ui/testimonial-strip"

export const metadata: Metadata = {
  title: "Course Content",
  description: "Everything you'll learn in Creator Camp Academy",
}

export default function CoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Everything You Need to <span className="text-primary">Go Viral</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A complete system for building a profitable personal brand from scratch
            </p>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <CurriculumSection />


      {/* SaaS Tools Section */}
      <SaasToolsSection />

      {/* What You'll Achieve Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              From Zero Views to <span className="text-primary">Life-Changing Results</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Go From 47 Views to Millions</h3>
                <p className="text-muted-foreground">Stop creating content that gets ignored - master the psychology that makes videos go viral</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Turn Views Into $10K+ Months</h3>
                <p className="text-muted-foreground">Stop working for free - learn the exact monetization systems our students use to hit 6-figures</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Build a Personal Brand That Pays</h3>
                <p className="text-muted-foreground">Stop being just another creator - become the go-to authority that brands pay premium rates</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Create a Sustainable Business</h3>
                <p className="text-muted-foreground">Stop the feast-or-famine cycle - build systems that generate consistent revenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master Content Creation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant access to all course materials and start your journey today
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  )
}