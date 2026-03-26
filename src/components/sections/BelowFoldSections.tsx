"use client";

import dynamic from "next/dynamic";

// Dynamic imports with ssr:false — these sections are below the fold,
// so we exclude them from the SSR bundle and initial JS payload entirely.
// They load client-side only when the page hydrates, dramatically reducing
// the initial JavaScript the browser must parse and execute.
const AboutHome2 = dynamic(() => import("@/components/sections/AboutHome2").then((mod) => ({ default: mod.AboutHome2 })), { ssr: false });
const MeetTheTeam = dynamic(() => import("@/components/sections/MeetTheTeam").then((mod) => ({ default: mod.MeetTheTeam })), { ssr: false });
const ServicesHome2 = dynamic(() => import("@/components/sections/ServicesHome2").then((mod) => ({ default: mod.ServicesHome2 })), { ssr: false });
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((mod) => ({ default: mod.TechStack })), { ssr: false });
const AwardsPartners = dynamic(() => import("@/components/sections/AwardsPartners").then((mod) => ({ default: mod.AwardsPartners })), { ssr: false });
const WorkHome2 = dynamic(() => import("@/components/sections/WorkHome2").then((mod) => ({ default: mod.WorkHome2 })), { ssr: false });
const VideoShowcase = dynamic(() => import("@/components/sections/VideoShowcase").then((mod) => ({ default: mod.VideoShowcase })), { ssr: false });
const ProcessHome2 = dynamic(() => import("@/components/sections/ProcessHome2").then((mod) => ({ default: mod.ProcessHome2 })), { ssr: false });
const CampaignPlans = dynamic(() => import("@/components/sections/CampaignPlans").then((mod) => ({ default: mod.CampaignPlans })), { ssr: false });
const TestimonialsHome2 = dynamic(() => import("@/components/sections/TestimonialsHome2").then((mod) => ({ default: mod.TestimonialsHome2 })), { ssr: false });
const FAQHome2 = dynamic(() => import("@/components/sections/FAQHome2").then((mod) => ({ default: mod.FAQHome2 })), { ssr: false });
const LifeAtTML = dynamic(() => import("@/components/sections/LifeAtTML").then((mod) => ({ default: mod.LifeAtTML })), { ssr: false });
const CTAHome2 = dynamic(() => import("@/components/sections/CTAHome2").then((mod) => ({ default: mod.CTAHome2 })), { ssr: false });
const FooterHome2 = dynamic(() => import("@/components/sections/FooterHome2").then((mod) => ({ default: mod.FooterHome2 })));

export default function BelowFoldSections() {
  return (
    <>
      {/* Group: About, Team, Services, Tech */}
      <div className="contents">
        <AboutHome2 />
        <MeetTheTeam />
        <ServicesHome2 />
        <TechStack />
      </div>
      {/* Group: Awards, Work, Video, Process */}
      <div className="contents">
        <AwardsPartners />
        <WorkHome2 />
        <VideoShowcase />
        <ProcessHome2 />
      </div>
      {/* Group: Plans, Testimonials, FAQ, Life */}
      <div className="contents">
        <CampaignPlans />
        <TestimonialsHome2 />
        <FAQHome2 />
        <LifeAtTML />
      </div>
      <CTAHome2 />
      <FooterHome2 />
    </>
  );
}
