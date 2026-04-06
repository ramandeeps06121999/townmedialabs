import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Sydney",
  description: "TML offers expert AI Influencer Management services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sydney", "ai influencer management agency sydney", "ai influencer management company sydney"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-sydney",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Sydney",
    description: "TML offers expert AI Influencer Management services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-sydney",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Sydney",
    description: "TML offers expert AI Influencer Management services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInSydneyPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
