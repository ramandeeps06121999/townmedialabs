import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Edmonton | TML Agency",
  description: "TML offers expert ai influencer management services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management edmonton", "ai influencer management agency edmonton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-edmonton",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Edmonton | TML Agency",
    description: "TML offers expert ai influencer management services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-edmonton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Edmonton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Edmonton | TML Agency",
    description: "TML offers expert ai influencer management services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
