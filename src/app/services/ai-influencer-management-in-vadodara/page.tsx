import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Vadodara | TML Agency",
  description: "TML offers expert AI influencer management services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management vadodara", "AI influencer management agency vadodara", "AI influencer management company vadodara"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-vadodara",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Vadodara | TML Agency",
    description: "TML offers expert AI influencer management services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-vadodara",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Vadodara | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Vadodara | TML Agency",
    description: "TML offers expert AI influencer management services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
