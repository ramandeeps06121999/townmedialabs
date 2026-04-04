import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Sacramento | TML Agency",
  description: "TML offers expert google ads services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads sacramento", "google ads agency sacramento", "google ads company sacramento"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-sacramento",
  },
  openGraph: {
    title: "Google Ads Agency in Sacramento | TML Agency",
    description: "TML offers expert google ads services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-sacramento",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Sacramento | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Sacramento | TML Agency",
    description: "TML offers expert google ads services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
