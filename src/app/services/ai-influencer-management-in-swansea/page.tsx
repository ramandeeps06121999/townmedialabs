import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Swansea",
  description: "TML offers expert AI Influencer Management services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management swansea", "ai influencer management agency swansea", "ai influencer management company swansea"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-swansea",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Swansea",
    description: "TML offers expert AI Influencer Management services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-swansea",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Swansea" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Swansea",
    description: "TML offers expert AI Influencer Management services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInSwanseaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
