import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Milton Keynes | TML Agency",
  description: "TML offers expert ai influencer management services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management milton keynes", "ai influencer management agency milton keynes", "ai influencer management company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-milton-keynes",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Milton Keynes | TML Agency",
    description: "TML offers expert ai influencer management services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Milton Keynes | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Milton Keynes | TML Agency",
    description: "TML offers expert ai influencer management services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
