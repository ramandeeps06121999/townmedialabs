import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Tauranga | TML Agency",
  description: "TML offers expert google ads services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads tauranga", "google ads agency tauranga", "google ads tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-tauranga",
  },
  openGraph: {
    title: "Best Google Ads Agency in Tauranga | TML Agency",
    description: "TML offers expert google ads services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Tauranga | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Tauranga | TML Agency",
    description: "TML offers expert google ads services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
