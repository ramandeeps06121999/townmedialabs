import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Noida | TML Agency",
  description: "TML offers expert AI influencer management services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management noida", "AI influencer management agency noida", "AI influencer management company noida"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-noida",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Noida | TML Agency",
    description: "TML offers expert AI influencer management services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-noida",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Noida | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Noida | TML Agency",
    description: "TML offers expert AI influencer management services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
