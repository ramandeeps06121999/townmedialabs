import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Las Vegas",
  description: "TML offers expert AI Influencer Management services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management las vegas", "ai influencer management agency las vegas", "ai influencer management company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-las-vegas",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Las Vegas",
    description: "TML offers expert AI Influencer Management services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Las Vegas",
    description: "TML offers expert AI Influencer Management services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInLasVegasPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
