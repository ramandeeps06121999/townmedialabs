import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Surat | TML Agency",
  description: "TML offers expert AI influencer management services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management surat", "AI influencer management agency surat", "AI influencer management company surat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-surat",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Surat | TML Agency",
    description: "TML offers expert AI influencer management services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-surat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Surat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Surat | TML Agency",
    description: "TML offers expert AI influencer management services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiinfluencermanagementInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
