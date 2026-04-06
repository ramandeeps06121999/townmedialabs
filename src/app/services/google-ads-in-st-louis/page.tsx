import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Google Ads Agency in St. Louis",
  description: "TML offers expert Google Ads services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads st. louis", "google ads agency st. louis", "google ads company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-st-louis",
  },
  openGraph: {
    title: "Google Ads Agency in St. Louis",
    description: "TML offers expert Google Ads services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in St. Louis",
    description: "TML offers expert Google Ads services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
