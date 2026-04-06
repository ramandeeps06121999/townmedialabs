import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Zirakpur",
  description: "TML offers expert Google Ads services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads zirakpur", "google ads agency zirakpur", "google ads company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-zirakpur",
  },
  openGraph: {
    title: "Google Ads Agency in Zirakpur",
    description: "TML offers expert Google Ads services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Zirakpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Zirakpur",
    description: "TML offers expert Google Ads services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInZirakpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
