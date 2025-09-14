import { Metadata } from "next"
import { CurriculumSection } from "@/components/sections/curriculum"

export const metadata: Metadata = {
  title: "Course Content",
  description: "Everything you'll learn in Complete YouTube Automation Kit",
}

export default function CoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Everything You Need to <span className="text-primary">Build YouTube Automation Channels</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete automation kit with AI tools, templates, and training for profitable YouTube channels
            </p>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <CurriculumSection />



      {/* What You'll Achieve Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              From Beginner to <span className="text-primary">YouTube Automation Expert</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Master AI Video Creation</h3>
                <p className="text-muted-foreground">Learn how to use AI to create professional videos in minutes, not hours</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Build Multiple Revenue Streams</h3>
                <p className="text-muted-foreground">Scale YouTube Automation channels to €100K+ monthly without teams</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Complete AI Workflow</h3>
                <p className="text-muted-foreground">Follow our Channel-in-a-Box framework from research to upload</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">Eliminate Team Costs</h3>
                <p className="text-muted-foreground">Replace expensive freelancers with AI tools and proven systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master AI Video Creation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant access to the complete YouTube Automation Kit with everything you need
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