import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Adelaide",
  description: "TML offers expert Google Ads services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads adelaide", "google ads agency adelaide", "google ads company adelaide"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-adelaide",
  },
  openGraph: {
    title: "Google Ads Agency in Adelaide",
    description: "TML offers expert Google Ads services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-adelaide",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Adelaide" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Adelaide",
    description: "TML offers expert Google Ads services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInAdelaidePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
