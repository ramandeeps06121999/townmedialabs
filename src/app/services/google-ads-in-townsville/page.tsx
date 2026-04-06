import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Townsville",
  description: "TML offers expert Google Ads services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads townsville", "google ads agency townsville", "google ads company townsville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-townsville",
  },
  openGraph: {
    title: "Google Ads Agency in Townsville",
    description: "TML offers expert Google Ads services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-townsville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Townsville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Townsville",
    description: "TML offers expert Google Ads services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInTownsvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
