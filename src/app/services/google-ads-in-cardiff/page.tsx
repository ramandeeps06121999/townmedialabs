import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Cardiff",
  description: "TML offers expert Google Ads services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads cardiff", "google ads agency cardiff", "google ads company cardiff"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-cardiff",
  },
  openGraph: {
    title: "Google Ads Agency in Cardiff",
    description: "TML offers expert Google Ads services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-cardiff",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Cardiff" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Cardiff",
    description: "TML offers expert Google Ads services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInCardiffPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
