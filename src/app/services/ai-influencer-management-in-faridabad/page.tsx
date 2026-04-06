import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Faridabad",
  description: "TML offers expert AI Influencer Management services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management faridabad", "AI influencer management agency faridabad", "AI influencer management company faridabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-faridabad",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Faridabad",
    description: "TML offers expert AI Influencer Management services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-faridabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Faridabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Faridabad",
    description: "TML offers expert AI Influencer Management services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInFaridabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
