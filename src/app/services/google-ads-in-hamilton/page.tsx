import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Hamilton | TML Agency",
  description: "TML offers expert google ads services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads hamilton", "google ads agency hamilton", "google ads hamilton nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-hamilton",
  },
  openGraph: {
    title: "Best Google Ads Agency in Hamilton | TML Agency",
    description: "TML offers expert google ads services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Hamilton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Hamilton | TML Agency",
    description: "TML offers expert google ads services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
