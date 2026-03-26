import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Ludhiana | TML Agency",
  description: "TML offers expert google ads services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads ludhiana", "google ads agency ludhiana", "google ads company ludhiana"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-ludhiana",
  },
  openGraph: {
    title: "Best Google Ads Agency in Ludhiana | TML Agency",
    description: "TML offers expert google ads services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-ludhiana",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Ludhiana | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Ludhiana | TML Agency",
    description: "TML offers expert google ads services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
