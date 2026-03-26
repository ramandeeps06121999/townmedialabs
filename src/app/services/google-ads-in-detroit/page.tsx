import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Detroit | TML Agency",
  description: "TML offers expert google ads services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads detroit", "google ads agency detroit", "google ads company detroit"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-detroit",
  },
  openGraph: {
    title: "Best Google Ads Agency in Detroit | TML Agency",
    description: "TML offers expert google ads services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Detroit | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Detroit | TML Agency",
    description: "TML offers expert google ads services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
