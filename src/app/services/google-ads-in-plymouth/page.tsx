import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Plymouth",
  description: "TML offers expert Google Ads services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads plymouth", "google ads agency plymouth", "google ads company plymouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-plymouth",
  },
  openGraph: {
    title: "Google Ads Agency in Plymouth",
    description: "TML offers expert Google Ads services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-plymouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Plymouth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Plymouth",
    description: "TML offers expert Google Ads services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInPlymouthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
