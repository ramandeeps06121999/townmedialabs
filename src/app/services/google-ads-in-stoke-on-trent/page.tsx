import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert google ads services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads stoke-on-trent", "google ads agency stoke-on-trent", "google ads company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-stoke-on-trent",
  },
  openGraph: {
    title: "Google Ads Agency in Stoke-on-Trent | TML Agency",
    description: "TML offers expert google ads services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Stoke-on-Trent | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Stoke-on-Trent | TML Agency",
    description: "TML offers expert google ads services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
