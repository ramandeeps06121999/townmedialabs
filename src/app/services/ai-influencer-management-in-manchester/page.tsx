import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Manchester",
  description: "TML offers expert AI Influencer Management services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management manchester", "ai influencer management agency manchester", "ai influencer management company manchester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-manchester",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Manchester",
    description: "TML offers expert AI Influencer Management services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-manchester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Manchester" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Manchester",
    description: "TML offers expert AI Influencer Management services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInManchesterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
