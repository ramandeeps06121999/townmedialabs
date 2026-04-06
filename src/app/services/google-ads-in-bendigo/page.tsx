import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Bendigo",
  description: "TML offers expert Google Ads services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads bendigo", "google ads agency bendigo", "google ads company bendigo"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-bendigo",
  },
  openGraph: {
    title: "Google Ads Agency in Bendigo",
    description: "TML offers expert Google Ads services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-bendigo",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Bendigo" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Bendigo",
    description: "TML offers expert Google Ads services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInBendigoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
