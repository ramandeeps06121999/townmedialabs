import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Perth",
  description: "TML offers expert AI Influencer Management services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management perth", "ai influencer management agency perth", "ai influencer management company perth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-perth",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Perth",
    description: "TML offers expert AI Influencer Management services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-perth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Perth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Perth",
    description: "TML offers expert AI Influencer Management services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInPerthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
