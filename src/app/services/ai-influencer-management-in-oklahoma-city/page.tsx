import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Oklahoma City",
  description: "TML offers expert AI Influencer Management services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management oklahoma city", "ai influencer management agency oklahoma city", "ai influencer management company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-oklahoma-city",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Oklahoma City",
    description: "TML offers expert AI Influencer Management services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Oklahoma City",
    description: "TML offers expert AI Influencer Management services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
