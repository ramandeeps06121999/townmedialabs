import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["al_ain"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Al Ain",
  description: "TML offers expert AI Influencer Management services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management al ain", "ai influencer management agency al ain", "ai influencer management company al ain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-al-ain",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Al Ain",
    description: "TML offers expert AI Influencer Management services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-al-ain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Al Ain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Al Ain",
    description: "TML offers expert AI Influencer Management services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInAlAinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
