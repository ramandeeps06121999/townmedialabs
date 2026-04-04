import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Preston | TML Agency",
  description: "TML offers expert ai influencer management services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management preston", "ai influencer management agency preston", "ai influencer management company preston"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-preston",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Preston | TML Agency",
    description: "TML offers expert ai influencer management services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-preston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Preston | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Preston | TML Agency",
    description: "TML offers expert ai influencer management services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
