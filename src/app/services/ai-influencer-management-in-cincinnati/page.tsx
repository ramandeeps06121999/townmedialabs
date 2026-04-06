import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Cincinnati",
  description: "TML offers expert AI Influencer Management services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management cincinnati", "ai influencer management agency cincinnati", "ai influencer management company cincinnati"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-cincinnati",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Cincinnati",
    description: "TML offers expert AI Influencer Management services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-cincinnati",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Cincinnati" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Cincinnati",
    description: "TML offers expert AI Influencer Management services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInCincinnatiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
