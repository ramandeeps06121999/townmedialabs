import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Memphis | TML Agency",
  description: "TML offers expert ai influencer management services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management memphis", "ai influencer management agency memphis", "ai influencer management company memphis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-memphis",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Memphis | TML Agency",
    description: "TML offers expert ai influencer management services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-memphis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Memphis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Memphis | TML Agency",
    description: "TML offers expert ai influencer management services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
