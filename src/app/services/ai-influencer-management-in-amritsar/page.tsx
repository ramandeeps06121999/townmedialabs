import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Amritsar",
  description: "TML offers expert AI Influencer Management services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management amritsar", "AI influencer management agency amritsar", "AI influencer management company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-amritsar",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Amritsar",
    description: "TML offers expert AI Influencer Management services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Amritsar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Amritsar",
    description: "TML offers expert AI Influencer Management services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInAmritsarPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
