import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Indianapolis",
  description: "TML offers expert AI Influencer Management services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management indianapolis", "ai influencer management agency indianapolis", "ai influencer management company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-indianapolis",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Indianapolis",
    description: "TML offers expert AI Influencer Management services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Indianapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Indianapolis",
    description: "TML offers expert AI Influencer Management services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInIndianapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
