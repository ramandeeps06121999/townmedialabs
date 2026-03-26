import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Kharar | TML Agency",
  description: "TML offers expert AI influencer management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management kharar", "AI influencer management agency kharar", "AI influencer management company kharar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-kharar",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Kharar | TML Agency",
    description: "TML offers expert AI influencer management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Kharar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Kharar | TML Agency",
    description: "TML offers expert AI influencer management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
