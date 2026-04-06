import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Christchurch",
  description: "TML offers expert Google Ads services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["google ads christchurch", "google ads agency christchurch", "google ads christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-christchurch",
  },
  openGraph: {
    title: "Google Ads Agency in Christchurch",
    description: "TML offers expert Google Ads services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Christchurch" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Christchurch",
    description: "TML offers expert Google Ads services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInChristchurchPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
