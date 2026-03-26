import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Bournemouth | TML Agency",
  description: "TML offers expert google ads services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads bournemouth", "google ads agency bournemouth", "google ads company bournemouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-bournemouth",
  },
  openGraph: {
    title: "Best Google Ads Agency in Bournemouth | TML Agency",
    description: "TML offers expert google ads services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-bournemouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Bournemouth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Bournemouth | TML Agency",
    description: "TML offers expert google ads services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
