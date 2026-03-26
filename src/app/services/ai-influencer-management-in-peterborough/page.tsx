import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Peterborough | TML Agency",
  description: "TML offers expert ai influencer management services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management peterborough", "ai influencer management agency peterborough", "ai influencer management company peterborough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-peterborough",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Peterborough | TML Agency",
    description: "TML offers expert ai influencer management services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-peterborough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Peterborough | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Peterborough | TML Agency",
    description: "TML offers expert ai influencer management services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
