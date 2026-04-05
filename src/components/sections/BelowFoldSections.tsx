"use client";

import dynamic from "next/dynamic";

// Skeleton loader — matches the site's dark theme with a subtle pulse animation.
// Keeps layout stable (no CLS) while JS chunks load for client-side sections.
function SectionSkeleton({ height = "h-96" }: { height?: string }) {
  return (
    <div className={`${height} w-full bg-[#050505] flex items-center justify-center`}>
      <div className="w-full max-w-7xl mx-auto px-6 space-y-6 animate-pulse">
        <div className="h-8 bg-white/5 rounded-lg w-2/5 mx-auto" />
        <div className="h-4 bg-white/5 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-white/5 rounded w-2/3 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="h-48 bg-white/5 rounded-xl" />
          <div className="h-48 bg-white/5 rounded-xl" />
          <div className="h-48 bg-white/5 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

// SSR-enabled sections (SEO-critical) — content renders server-side so crawlers see it.
// Skeleton shows briefly while JS hydrates on the client.
const AboutHome2 = dynamic(() => import("@/components/sections/AboutHome2").then((mod) => ({ default: mod.AboutHome2 })), { loading: () => <SectionSkeleton height="h-[600px]" /> });
const ServicesHome2 = dynamic(() => import("@/components/sections/ServicesHome2").then((mod) => ({ default: mod.ServicesHome2 })), { loading: () => <SectionSkeleton height="h-[800px]" /> });
const ProcessHome2 = dynamic(() => import("@/components/sections/ProcessHome2").then((mod) => ({ default: mod.ProcessHome2 })), { loading: () => <SectionSkeleton /> });
const TestimonialsHome2 = dynamic(() => import("@/components/sections/TestimonialsHome2").then((mod) => ({ default: mod.TestimonialsHome2 })), { loading: () => <SectionSkeleton /> });
const FAQHome2 = dynamic(() => import("@/components/sections/FAQHome2").then((mod) => ({ default: mod.FAQHome2 })), { loading: () => <SectionSkeleton height="h-[500px]" /> });

// Client-only sections (non-SEO-critical) — excluded from SSR bundle for performance.
const MeetTheTeam = dynamic(() => import("@/components/sections/MeetTheTeam").then((mod) => ({ default: mod.MeetTheTeam })), { ssr: false, loading: () => <SectionSkeleton /> });
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((mod) => ({ default: mod.TechStack })), { ssr: false, loading: () => <SectionSkeleton height="h-64" /> });
const AwardsPartners = dynamic(() => import("@/components/sections/AwardsPartners").then((mod) => ({ default: mod.AwardsPartners })), { ssr: false, loading: () => <SectionSkeleton height="h-64" /> });
const WorkHome2 = dynamic(() => import("@/components/sections/WorkHome2").then((mod) => ({ default: mod.WorkHome2 })), { ssr: false, loading: () => <SectionSkeleton height="h-[600px]" /> });
const VideoShowcase = dynamic(() => import("@/components/sections/VideoShowcase").then((mod) => ({ default: mod.VideoShowcase })), { ssr: false, loading: () => <SectionSkeleton /> });
const CampaignPlans = dynamic(() => import("@/components/sections/CampaignPlans").then((mod) => ({ default: mod.CampaignPlans })), { ssr: false, loading: () => <SectionSkeleton /> });
const LifeAtTML = dynamic(() => import("@/components/sections/LifeAtTML").then((mod) => ({ default: mod.LifeAtTML })), { ssr: false, loading: () => <SectionSkeleton height="h-64" /> });
const CTAHome2 = dynamic(() => import("@/components/sections/CTAHome2").then((mod) => ({ default: mod.CTAHome2 })), { ssr: false, loading: () => <SectionSkeleton height="h-48" /> });
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
