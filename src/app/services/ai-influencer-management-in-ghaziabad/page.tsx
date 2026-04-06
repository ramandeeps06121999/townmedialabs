import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Ghaziabad",
  description: "TML offers expert AI Influencer Management services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management ghaziabad", "AI influencer management agency ghaziabad", "AI influencer management company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-ghaziabad",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Ghaziabad",
    description: "TML offers expert AI Influencer Management services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Ghaziabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Ghaziabad",
    description: "TML offers expert AI Influencer Management services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInGhaziabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
