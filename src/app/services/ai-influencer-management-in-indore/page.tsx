import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Indore",
  description: "TML offers expert AI Influencer Management services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management indore", "AI influencer management agency indore", "AI influencer management company indore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-indore",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Indore",
    description: "TML offers expert AI Influencer Management services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Indore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Indore",
    description: "TML offers expert AI Influencer Management services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInIndorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
