import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Birmingham | TML Agency",
  description: "TML offers expert ai influencer management services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management birmingham", "ai influencer management agency birmingham", "ai influencer management company birmingham"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-birmingham",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Birmingham | TML Agency",
    description: "TML offers expert ai influencer management services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-birmingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Birmingham | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Birmingham | TML Agency",
    description: "TML offers expert ai influencer management services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
