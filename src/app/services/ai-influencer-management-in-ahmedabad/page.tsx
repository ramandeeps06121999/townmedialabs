import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Ahmedabad | TML Agency",
  description: "TML offers expert AI influencer management services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management ahmedabad", "AI influencer management agency ahmedabad", "AI influencer management company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-ahmedabad",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Ahmedabad | TML Agency",
    description: "TML offers expert AI influencer management services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Ahmedabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Ahmedabad | TML Agency",
    description: "TML offers expert AI influencer management services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
