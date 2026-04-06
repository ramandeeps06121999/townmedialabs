import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Virginia Beach",
  description: "TML offers expert Google Ads services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads virginia beach", "google ads agency virginia beach", "google ads company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-virginia-beach",
  },
  openGraph: {
    title: "Google Ads Agency in Virginia Beach",
    description: "TML offers expert Google Ads services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Virginia Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Virginia Beach",
    description: "TML offers expert Google Ads services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInVirginiaBeachPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
