import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Google Ads Agency in San Antonio | TML Agency",
  description: "TML offers expert google ads services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads san antonio", "google ads agency san antonio", "google ads company san antonio"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-san-antonio",
  },
  openGraph: {
    title: "Google Ads Agency in San Antonio | TML Agency",
    description: "TML offers expert google ads services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-san-antonio",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in San Antonio | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in San Antonio | TML Agency",
    description: "TML offers expert google ads services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
