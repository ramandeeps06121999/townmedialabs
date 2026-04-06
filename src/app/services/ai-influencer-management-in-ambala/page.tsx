import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Ambala",
  description: "TML offers expert AI Influencer Management services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management ambala", "AI influencer management agency ambala", "AI influencer management company ambala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-ambala",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Ambala",
    description: "TML offers expert AI Influencer Management services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-ambala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Ambala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Ambala",
    description: "TML offers expert AI Influencer Management services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInAmbalaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
