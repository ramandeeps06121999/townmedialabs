import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Zirakpur | TML Agency",
  description: "TML offers expert google ads services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads zirakpur", "google ads agency zirakpur", "google ads company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-zirakpur",
  },
  openGraph: {
    title: "Google Ads Agency in Zirakpur | TML Agency",
    description: "TML offers expert google ads services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Zirakpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Zirakpur | TML Agency",
    description: "TML offers expert google ads services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
