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

const siteUrl = "https://townmedialabs.com";

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
  openGraph: {
    title: "TML Agency | #1 Digital Marketing Agency in Chandigarh",
    description:
      "Chandigarh's top digital marketing agency. SEO, Google Ads, branding, web development & social media marketing. 500+ brands scaled.",
    url: siteUrl,
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TML Agency - #1 Digital Marketing Agency in Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TML Agency | #1 Digital Marketing Agency in Chandigarh",
    description:
      "Chandigarh's top digital marketing agency. SEO, Google Ads, branding, web development & social media marketing. 500+ brands scaled.",
    images: ["/og-image.png"],
  },
};

const homepageOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "TML Agency",
  alternateName: ["Town Media Labs", "TML Digital Marketing Agency"],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  description:
    "Full-service digital marketing and branding agency based in Chandigarh, India. Specialising in branding, web development, SEO, Google Ads, social media marketing, and performance marketing. 500+ brands scaled, 15+ years of experience.",
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 70,
    unitText: "employees",
  },
  email: "info@townmedialabs.com",
  telephone: "+91-98726-48209",
  address: {
    "@type": "PostalAddress",
    streetAddress: "CO 112, Basement, Sector 34A",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    postalCode: "160022",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7281",
    longitude: "76.7726",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-98726-48209",
      contactType: "customer service",
      email: "info@townmedialabs.com",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["IN", "US", "GB", "CA", "AU", "NZ", "AE"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/Town.media.labs",
    "https://www.instagram.com/townmedialabs/",
    "https://in.linkedin.com/company/townmedialabs",
    "https://twitter.com/tmlagency",
    "https://www.youtube.com/@tmlagency",
  ],
  knowsAbout: [
    "Digital Marketing",
    "Branding",
    "Web Development",
    "Search Engine Optimization",
    "Google Ads",
    "Social Media Marketing",
    "Performance Marketing",
    "Content Marketing",
    "Graphic Design",
    "Lead Generation",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "TML Agency",
  url: siteUrl,
  description:
    "TML Agency is Chandigarh's top digital marketing agency offering SEO, Google Ads, branding, web development and social media marketing services.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageOrganizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
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
