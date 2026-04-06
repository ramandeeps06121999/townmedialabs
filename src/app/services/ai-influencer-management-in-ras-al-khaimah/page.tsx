import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Ras Al Khaimah",
  description: "TML offers expert AI Influencer Management services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management ras al khaimah", "ai influencer management agency ras al khaimah", "ai influencer management company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-ras-al-khaimah",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Ras Al Khaimah",
    description: "TML offers expert AI Influencer Management services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Ras Al Khaimah",
    description: "TML offers expert AI Influencer Management services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
