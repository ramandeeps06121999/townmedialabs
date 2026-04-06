import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Jaipur",
  description: "TML offers expert AI Influencer Management services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management jaipur", "AI influencer management agency jaipur", "AI influencer management company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-jaipur",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Jaipur",
    description: "TML offers expert AI Influencer Management services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Jaipur",
    description: "TML offers expert AI Influencer Management services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInJaipurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
