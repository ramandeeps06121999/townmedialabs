import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Glasgow",
  description: "TML offers expert AI Influencer Management services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management glasgow", "ai influencer management agency glasgow", "ai influencer management company glasgow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-glasgow",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Glasgow",
    description: "TML offers expert AI Influencer Management services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-glasgow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Glasgow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Glasgow",
    description: "TML offers expert AI Influencer Management services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInGlasgowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
