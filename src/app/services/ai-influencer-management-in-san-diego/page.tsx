import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_diego"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in San Diego",
  description: "TML offers expert AI Influencer Management services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management san diego", "ai influencer management agency san diego", "ai influencer management company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-san-diego",
  },
  openGraph: {
    title: "AI Influencer Management Agency in San Diego",
    description: "TML offers expert AI Influencer Management services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in San Diego" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in San Diego",
    description: "TML offers expert AI Influencer Management services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSanDiegoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
