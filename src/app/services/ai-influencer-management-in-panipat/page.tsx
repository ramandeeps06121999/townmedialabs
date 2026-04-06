import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Panipat",
  description: "TML offers expert AI Influencer Management services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management panipat", "AI influencer management agency panipat", "AI influencer management company panipat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-panipat",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Panipat",
    description: "TML offers expert AI Influencer Management services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Panipat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Panipat",
    description: "TML offers expert AI Influencer Management services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInPanipatPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
