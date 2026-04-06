import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Lucknow",
  description: "TML offers expert AI Influencer Management services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management lucknow", "AI influencer management agency lucknow", "AI influencer management company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-lucknow",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Lucknow",
    description: "TML offers expert AI Influencer Management services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Lucknow",
    description: "TML offers expert AI Influencer Management services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
