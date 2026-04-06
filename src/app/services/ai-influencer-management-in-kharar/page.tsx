import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Kharar",
  description: "TML offers expert AI Influencer Management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management kharar", "AI influencer management agency kharar", "AI influencer management company kharar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-kharar",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Kharar",
    description: "TML offers expert AI Influencer Management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Kharar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Kharar",
    description: "TML offers expert AI Influencer Management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInKhararPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
