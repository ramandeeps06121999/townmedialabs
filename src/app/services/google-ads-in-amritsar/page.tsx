import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Amritsar",
  description: "TML offers expert Google Ads management services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management amritsar", "Google Ads management agency amritsar", "Google Ads management company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-amritsar",
  },
  openGraph: {
    title: "Google Ads Agency in Amritsar",
    description: "TML offers expert Google Ads management services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Amritsar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Amritsar",
    description: "TML offers expert Google Ads management services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInAmritsarPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
