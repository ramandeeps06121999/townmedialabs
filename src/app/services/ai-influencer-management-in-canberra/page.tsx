import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Canberra",
  description: "TML offers expert AI Influencer Management services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management canberra", "ai influencer management agency canberra", "ai influencer management company canberra"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-canberra",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Canberra",
    description: "TML offers expert AI Influencer Management services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Canberra" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Canberra",
    description: "TML offers expert AI Influencer Management services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInCanberraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
