import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Pune",
  description: "TML offers expert AI Influencer Management services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management pune", "AI influencer management agency pune", "AI influencer management company pune"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-pune",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Pune",
    description: "TML offers expert AI Influencer Management services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Pune" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Pune",
    description: "TML offers expert AI Influencer Management services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInPunePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
