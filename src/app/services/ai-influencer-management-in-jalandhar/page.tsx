import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Jalandhar | TML Agency",
  description: "TML offers expert AI influencer management services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management jalandhar", "AI influencer management agency jalandhar", "AI influencer management company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-jalandhar",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Jalandhar | TML Agency",
    description: "TML offers expert AI influencer management services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Jalandhar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Jalandhar | TML Agency",
    description: "TML offers expert AI influencer management services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
