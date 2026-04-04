import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Patiala | TML Agency",
  description: "TML offers expert AI influencer management services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management patiala", "AI influencer management agency patiala", "AI influencer management company patiala"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-patiala",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Patiala | TML Agency",
    description: "TML offers expert AI influencer management services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-patiala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Patiala | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Patiala | TML Agency",
    description: "TML offers expert AI influencer management services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
