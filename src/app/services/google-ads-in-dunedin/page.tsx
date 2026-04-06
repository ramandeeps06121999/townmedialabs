import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Dunedin",
  description: "TML offers expert Google Ads services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads dunedin", "google ads agency dunedin", "google ads dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-dunedin",
  },
  openGraph: {
    title: "Google Ads Agency in Dunedin",
    description: "TML offers expert Google Ads services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Dunedin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Dunedin",
    description: "TML offers expert Google Ads services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInDunedinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
