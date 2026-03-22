import { Metadata } from "next";
import NavbarHome2 from "@/components/layout/NavbarHome2";
import HeroHome2 from "@/components/sections/HeroHome2";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { AboutHome2 } from "@/components/sections/AboutHome2";
import { MeetTheTeam } from "@/components/sections/MeetTheTeam";
import { ServicesHome2 } from "@/components/sections/ServicesHome2";
import { TechStack } from "@/components/sections/TechStack";
import { AwardsPartners } from "@/components/sections/AwardsPartners";
import { WorkHome2 } from "@/components/sections/WorkHome2";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { ProcessHome2 } from "@/components/sections/ProcessHome2";
import { CampaignPlans } from "@/components/sections/CampaignPlans";
import { TestimonialsHome2 } from "@/components/sections/TestimonialsHome2";
import { FAQHome2 } from "@/components/sections/FAQHome2";
import { LifeAtTML } from "@/components/sections/LifeAtTML";
import { CTAHome2 } from "@/components/sections/CTAHome2";
import { FooterHome2 } from "@/components/sections/FooterHome2";

export const metadata: Metadata = {
  title: "TML Agency | #1 Digital Marketing Agency in Chandigarh | SEO, Branding & Ads",
  description:
    "TML Agency is Chandigarh's top digital marketing agency. SEO, Google Ads, branding, web development & social media marketing. 500+ brands scaled. Get a free audit.",
  keywords: [
    "digital marketing agency Chandigarh",
    "SEO agency Chandigarh",
    "Google Ads agency",
    "branding agency Chandigarh",
    "web development Chandigarh",
    "social media marketing",
    "performance marketing agency",
    "lead generation agency",
    "Meta Ads agency",
    "content writing services",
    "link building services",
    "technical SEO",
    "GMB listing optimization",
    "best digital marketing company Chandigarh",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <NavbarHome2 />
      <HeroHome2 />
      <ClientLogos />
      <AboutHome2 />
      <MeetTheTeam />
      <ServicesHome2 />
      <TechStack />
      <AwardsPartners />
      <WorkHome2 />
      <VideoShowcase />
      <ProcessHome2 />
      <CampaignPlans />
      <TestimonialsHome2 />
      <FAQHome2 />
      <LifeAtTML />
      <CTAHome2 />
      <FooterHome2 />
    </main>
  );
}
