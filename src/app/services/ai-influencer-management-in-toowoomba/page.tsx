import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Toowoomba | TML Agency",
  description: "TML offers expert ai influencer management services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management toowoomba", "ai influencer management agency toowoomba", "ai influencer management company toowoomba"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-toowoomba",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Toowoomba | TML Agency",
    description: "TML offers expert ai influencer management services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-toowoomba",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Toowoomba | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Toowoomba | TML Agency",
    description: "TML offers expert ai influencer management services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
