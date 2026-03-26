import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Dunedin | TML Agency",
  description: "TML offers expert google ads services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads dunedin", "google ads agency dunedin", "google ads dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-dunedin",
  },
  openGraph: {
    title: "Best Google Ads Agency in Dunedin | TML Agency",
    description: "TML offers expert google ads services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Dunedin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Dunedin | TML Agency",
    description: "TML offers expert google ads services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInDunedinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
