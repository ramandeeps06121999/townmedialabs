import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Wellington | TML Agency",
  description: "TML offers expert google ads services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads wellington", "google ads agency wellington", "google ads wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-wellington",
  },
  openGraph: {
    title: "Google Ads Agency in Wellington | TML Agency",
    description: "TML offers expert google ads services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Wellington | TML Agency",
    description: "TML offers expert google ads services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
