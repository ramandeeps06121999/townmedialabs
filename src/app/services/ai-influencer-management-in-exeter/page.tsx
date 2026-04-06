import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Exeter",
  description: "TML offers expert AI Influencer Management services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management exeter", "ai influencer management agency exeter", "ai influencer management company exeter"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-exeter",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Exeter",
    description: "TML offers expert AI Influencer Management services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-exeter",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Exeter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Exeter",
    description: "TML offers expert AI Influencer Management services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInExeterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
