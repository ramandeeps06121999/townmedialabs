import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Honolulu | TML Agency",
  description: "TML offers expert google ads services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads honolulu", "google ads agency honolulu", "google ads company honolulu"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-honolulu",
  },
  openGraph: {
    title: "Google Ads Agency in Honolulu | TML Agency",
    description: "TML offers expert google ads services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-honolulu",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Honolulu | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Honolulu | TML Agency",
    description: "TML offers expert google ads services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
