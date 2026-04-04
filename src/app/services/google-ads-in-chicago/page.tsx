import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Chicago | TML Agency",
  description: "TML offers expert google ads services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads chicago", "google ads agency chicago", "google ads company chicago"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-chicago",
  },
  openGraph: {
    title: "Google Ads Agency in Chicago | TML Agency",
    description: "TML offers expert google ads services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-chicago",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Chicago | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Chicago | TML Agency",
    description: "TML offers expert google ads services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
