import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Milton Keynes",
  description: "TML offers expert AI Influencer Management services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management milton keynes", "ai influencer management agency milton keynes", "ai influencer management company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-milton-keynes",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Milton Keynes",
    description: "TML offers expert AI Influencer Management services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Milton Keynes",
    description: "TML offers expert AI Influencer Management services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
