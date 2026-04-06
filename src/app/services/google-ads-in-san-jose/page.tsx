import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Google Ads Agency in San Jose",
  description: "TML offers expert Google Ads services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads san jose", "google ads agency san jose", "google ads company san jose"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-san-jose",
  },
  openGraph: {
    title: "Google Ads Agency in San Jose",
    description: "TML offers expert Google Ads services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in San Jose" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in San Jose",
    description: "TML offers expert Google Ads services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInSanJosePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
