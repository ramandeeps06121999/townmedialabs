import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Palmerston North",
  description: "TML offers expert Google Ads services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads palmerston north", "google ads agency palmerston north", "google ads palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-palmerston-north",
  },
  openGraph: {
    title: "Google Ads Agency in Palmerston North",
    description: "TML offers expert Google Ads services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Palmerston North",
    description: "TML offers expert Google Ads services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
