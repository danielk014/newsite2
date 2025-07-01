import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { WarningSection } from "@/components/sections/warning";
import { SolutionSection } from "@/components/sections/solution";
import { SaasToolsSection } from "@/components/sections/saas-tools";
import { SocialProofSection } from "@/components/sections/social-proof";
import { CurriculumSection } from "@/components/sections/curriculum";
import { FAQSection } from "@/components/sections/faq";
import { UrgencySection } from "@/components/sections/urgency";
import { PricingSection } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <WarningSection />
      <SolutionSection />
      <SaasToolsSection />
      <SocialProofSection />
      <CurriculumSection />
      <UrgencySection />
      <PricingSection />
      <FAQSection />
    </main>
  );
}
