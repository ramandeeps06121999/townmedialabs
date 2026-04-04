import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert AI influencer management services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management visakhapatnam", "AI influencer management agency visakhapatnam", "AI influencer management company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-visakhapatnam",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert AI influencer management services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Visakhapatnam | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert AI influencer management services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
