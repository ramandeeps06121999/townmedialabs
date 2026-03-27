import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best AI Influencer Management Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert ai influencer management services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management umm al quwain", "ai influencer management agency umm al quwain", "ai influencer management company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Umm Al Quwain | TML Agency",
    description: "TML offers expert ai influencer management services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Umm Al Quwain | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Umm Al Quwain | TML Agency",
    description: "TML offers expert ai influencer management services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
