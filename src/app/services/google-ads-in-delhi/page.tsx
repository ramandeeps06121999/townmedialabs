import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Delhi",
  description: "TML offers expert Google Ads services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads delhi", "google ads agency delhi", "google ads company delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-delhi",
  },
  openGraph: {
    title: "Google Ads Agency in Delhi",
    description: "TML offers expert Google Ads services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Delhi",
    description: "TML offers expert Google Ads services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
