import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Umm Al Quwain",
  description: "TML offers expert AI Influencer Management services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management umm al quwain", "ai influencer management agency umm al quwain", "ai influencer management company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-umm-al-quwain",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Umm Al Quwain",
    description: "TML offers expert AI Influencer Management services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Umm Al Quwain",
    description: "TML offers expert AI Influencer Management services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
