"use client"

import { HeroSection } from "@/components/sections/hero";
import { CredibilitySection } from "@/components/sections/credibility";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { TestimonialStrip } from "@/components/ui/testimonial-strip";
import Image from "next/image";
// import { UrgencySection } from "@/components/sections/urgency";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Story Channels Success Slideshow - Very Top of Page - 50% Bigger */}
      <section className="py-12 md:py-18 bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              These Channels Are Making <span className="text-primary">$20K+/Month</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              with 60-second narration style videos that can be replicated with AI
            </p>
          </div>
          
          {/* Sliding Carousel - Images 50% Bigger */}
          <div className="relative">
            <div className="flex animate-scroll-left space-x-6">
              {/* Leading images to fill left side on load */}
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/feyze.png" 
                  alt="Feyze Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/brighter.png" 
                  alt="Brighter Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/monium.png" 
                  alt="Monium Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              
              {/* First set of images - 50% bigger images, same containers */}
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/dylan-anderson.png" 
                  alt="Dylan Anderson Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/cardogjones.png" 
                  alt="CardogJones Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/cophumor.png" 
                  alt="CopHumor Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/joe.png" 
                  alt="Joe Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/feyze.png" 
                  alt="Feyze Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/brighter.png" 
                  alt="Brighter Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/monium.png" 
                  alt="Monium Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              
              {/* First duplicate set for seamless loop */}
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/dylan-anderson.png" 
                  alt="Dylan Anderson Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/cardogjones.png" 
                  alt="CardogJones Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/cophumor.png" 
                  alt="CopHumor Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/joe.png" 
                  alt="Joe Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/feyze.png" 
                  alt="Feyze Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/brighter.png" 
                  alt="Brighter Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/monium.png" 
                  alt="Monium Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              
              {/* Second duplicate set for extra smooth transition */}
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/dylan-anderson.png" 
                  alt="Dylan Anderson Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/cardogjones.png" 
                  alt="CardogJones Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 bg-card border border-border rounded-lg p-2 hover:shadow-lg transition-shadow">
                <Image 
                  src="/story-channels/cophumor.png" 
                  alt="CopHumor Story Channel Success"
                  width={336}
                  height={252}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Panel Section */}
      <section className="py-8 bg-gradient-to-r from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 rounded-2xl p-8 max-w-2xl w-full backdrop-blur text-center">
              {/* AI Description Text */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Learn How to Build a Profitable YouTube Shorts Channel Using AI
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  (Make $20K+/Month with 60-Second Videos)
                </p>
                <p className="text-lg text-muted-foreground mb-3">
                  AI-assisted content creation with <span className="font-semibold text-foreground">zero team costs</span>
                </p>
                <p className="text-lg text-primary font-semibold mb-3">
                  AI tools handle: research → script → voice → edit → thumbnail → upload
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Just you + AI = Profitable YouTube business
                </p>
              </div>
              
              {/* Pricing Header */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl line-through text-muted-foreground/60">$50</span>
                  <span className="bg-destructive text-destructive-foreground text-sm px-3 py-1 rounded-full font-semibold">90% OFF</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-3">
                  <span className="text-6xl font-bold text-primary">$5</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="bg-destructive/20 text-destructive border border-destructive/30 px-3 py-2 rounded-md font-bold text-sm animate-pulse">
                    ⚠️ Price returns to $50/month soon!
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-2xl">✨</span>
                <h3 className="text-2xl font-bold text-primary">Complete YouTube Automation Kit</h3>
                <span className="text-2xl">✨</span>
              </div>
              
              {/* CTA inside the pricing panel */}
              <div className="text-center">
                <p className="text-xl font-semibold text-foreground mb-4">
                  Get the complete tool kit
                </p>
                <button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg transition-colors w-full max-w-md flex items-center justify-center gap-2 mx-auto"
                  onClick={() => window.location.href = '/pricing'}
                >
                  Get Instant Access - $5/month
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <HeroSection />
      
      {/* AI YouTube Shorts Mastery Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How to Build a <span className="text-primary">$20K+/Month</span> Shorts Channel Using AI Tools
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Make $20K+/Month with 60-Second Videos
            </p>
            <p className="text-lg text-accent font-semibold mb-8">
              &quot;AI writes, narrates & edits everything&quot;
            </p>
          </div>
          
          {/* 4-Step AI Process */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">AI finds trending stories</h3>
              <p className="text-sm text-muted-foreground">AI scans viral content and identifies trending story topics with high engagement potential</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-bold text-accent mb-3">AI writes emotional script</h3>
              <p className="text-sm text-muted-foreground">Creates compelling, hook-driven scripts designed to keep viewers watching until the end</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">AI creates voice narration</h3>
              <p className="text-sm text-muted-foreground">Generates natural-sounding voiceovers with perfect pacing and emotional delivery</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-lg font-bold text-accent mb-3">AI edits with stock footage</h3>
              <p className="text-sm text-muted-foreground">Automatically matches visuals to script and creates polished, engaging short-form videos</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-2xl">🤖</span>
              <span className="font-bold text-primary">The AI Story Channel Blueprint That&apos;s Creating $500K+/Year Channels</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join a <span className="text-primary">Thriving Community</span> of Successful Creators
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with 500+ successful creators who&apos;ve built profitable faceless YouTube channels and learn from their real results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image 
                src="/testimonials/youtube-partner.png" 
                alt="YouTube Partnership Achievement"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image 
                src="/testimonials/earnings-6k.png" 
                alt="Weekly Progress Screenshot"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image 
                src="/testimonials/channel-981k.png" 
                alt="981K Subscribers Channel"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow lg:col-span-2">
              <Image 
                src="/testimonials/views-1m.png" 
                alt="1.1M Views Analytics"
                width={600}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image 
                src="/testimonials/views-92m.png" 
                alt="92M Views Analytics"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why We Dominate Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Our Channels <span className="text-primary">Dominate the Algorithm</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We don&apos;t guess - we follow proven data from billions of views.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2B+</div>
                <div className="text-sm text-muted-foreground">Views Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Channels (Multi-Language)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Professional</div>
                <div className="text-sm text-muted-foreground">Training Methods</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CredibilitySection />
      
      <TestimonialStrip startIndex={0} title="Faceless YouTubers Are Growing their channels" />
      
      <ProblemSection />
      
      {/* Move AI Tools higher for better visibility */}
      
      <SolutionSection />
      
      {/* Complete Success System Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-primary">Automate</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get access to the complete automation system that&apos;s helped thousands build successful faceless YouTube empires
            </p>
          </div>

          {/* Core Training */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">CORE TRAINING</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Faceless Channel Setup</h4>
                    <p className="text-muted-foreground text-sm mb-3">Launch successful YouTube channels without showing your face</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• High-Profit Niche Selection & Market Research</li>
                      <li>• Anonymous Channel Creation & Optimization</li>
                      <li>• Privacy Protection & Security Protocols</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">AI Content Creation</h4>
                    <p className="text-muted-foreground text-sm mb-3">Automate video creation using cutting-edge AI</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI Script Generation for Trending Topics</li>
                      <li>• Automated Video Assembly & Editing</li>
                      <li>• Voice Synthesis & Custom Narration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Automation Workflows</h4>
                    <p className="text-muted-foreground text-sm mb-3">Complete hands-off channel management</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Automated Content Scheduling & Publishing</li>
                      <li>• Smart Thumbnail Generation & A/B Testing</li>
                      <li>• Performance Analytics & Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Scaling & Outsourcing</h4>
                    <p className="text-muted-foreground text-sm mb-3">Build a team and scale to multiple channels</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Virtual Team Building & Management</li>
                      <li>• Multi-Channel Empire Strategies</li>
                      <li>• Advanced Revenue Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Access - Enhanced */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">EXCLUSIVE COMMUNITY ACCESS</h3>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-8 mb-6">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-primary mb-4">Join 500+ Successful Creators</h4>
                <p className="text-lg text-muted-foreground">Get instant access to our private Discord community where members share wins, strategies, and support each other&apos;s growth</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs text-white font-bold">💬</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-accent mb-2">Daily Win Shares</h4>
                      <p className="text-muted-foreground text-sm">See real progress screenshots and channel milestones from active members</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs text-white font-bold">🔥</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-accent mb-2">Live Strategy Sessions</h4>
                      <p className="text-muted-foreground text-sm">Weekly group calls with successful members sharing their latest tactics</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs text-white font-bold">⚡</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-accent mb-2">Instant Help & Support</h4>
                      <p className="text-muted-foreground text-sm">Get quick answers from experienced creators who&apos;ve been where you are</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs text-white font-bold">📊</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-accent mb-2">Channel Reviews</h4>
                      <p className="text-muted-foreground text-sm">Submit your content for expert feedback and optimization suggestions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs text-white font-bold">👑</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary mb-2">Elite Mastermind</h4>
                      <p className="text-muted-foreground text-sm">Exclusive access for experienced creators sharing advanced scaling strategies</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs text-white font-bold">🎯</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-accent mb-2">Accountability Partners</h4>
                      <p className="text-muted-foreground text-sm">Connect with like-minded creators for mutual support and goal tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-primary mb-2">🎉 Complete Community Access Included</p>
              <p className="text-muted-foreground">Included FREE with your Creator Camp access</p>
            </div>
          </div>

          {/* Resources & Tools */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">RESOURCES & TOOLS</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-accent mb-2">Creator Toolkit</h4>
                    <p className="text-muted-foreground text-sm mb-3">Done-for-you templates and scripts</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 500+ viral script templates</li>
                      <li>• Professional editing presets</li>
                      <li>• Brand deal email templates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-xs text-white font-bold">🤖</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary mb-2">Exclusive Bonus Tools</h4>
                    <p className="text-muted-foreground text-sm mb-3">Advanced automation tools to accelerate your success ($297/mo value)</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong className="text-foreground">Revenue Analytics:</strong> Track your channel&apos;s earning potential and growth
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong className="text-foreground">Content Generator:</strong> Speed up content creation with our proprietary tools
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong className="text-foreground">Success Predictor:</strong> Optimize content for maximum performance
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
            >
              Get Everything Now →
            </a>
          </div>
        </div>
      </section>
      
      {/* <UrgencySection /> */}
      
      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-background to-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Journey to <span className="text-primary">YouTube Automation</span> Starts Here
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t let another day pass being camera shy. Join thousands who built successful faceless channels.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8"
          >
            Start Automating Today
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
      
      {/* Meta Disclaimer */}
      <section className="py-8 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
            This site is not part of Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta in any way. Meta is a trademark of Meta Platforms, Inc.
          </p>
        </div>
      </section>
    </div>
  );
}
