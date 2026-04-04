import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Bristol | TML Agency",
  description: "TML offers expert google ads services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads bristol", "google ads agency bristol", "google ads company bristol"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-bristol",
  },
  openGraph: {
    title: "Google Ads Agency in Bristol | TML Agency",
    description: "TML offers expert google ads services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Bristol | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Bristol | TML Agency",
    description: "TML offers expert google ads services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
