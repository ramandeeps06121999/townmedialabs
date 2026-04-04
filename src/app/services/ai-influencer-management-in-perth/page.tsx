import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Perth | TML Agency",
  description: "TML offers expert ai influencer management services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management perth", "ai influencer management agency perth", "ai influencer management company perth"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-perth",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Perth | TML Agency",
    description: "TML offers expert ai influencer management services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-perth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Perth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Perth | TML Agency",
    description: "TML offers expert ai influencer management services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
