import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Leicester",
  description: "TML offers expert AI Influencer Management services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management leicester", "ai influencer management agency leicester", "ai influencer management company leicester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-leicester",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Leicester",
    description: "TML offers expert AI Influencer Management services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-leicester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Leicester" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Leicester",
    description: "TML offers expert AI Influencer Management services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInLeicesterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
