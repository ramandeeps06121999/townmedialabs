import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Karnal | TML Agency",
  description: "TML offers expert AI influencer management services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management karnal", "AI influencer management agency karnal", "AI influencer management company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-karnal",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Karnal | TML Agency",
    description: "TML offers expert AI influencer management services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Karnal | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Karnal | TML Agency",
    description: "TML offers expert AI influencer management services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
