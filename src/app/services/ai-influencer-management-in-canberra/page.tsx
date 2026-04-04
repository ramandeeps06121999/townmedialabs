import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Canberra | TML Agency",
  description: "TML offers expert ai influencer management services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management canberra", "ai influencer management agency canberra", "ai influencer management company canberra"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-canberra",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Canberra | TML Agency",
    description: "TML offers expert ai influencer management services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Canberra | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Canberra | TML Agency",
    description: "TML offers expert ai influencer management services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
