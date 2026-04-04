import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Richmond | TML Agency",
  description: "TML offers expert google ads services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads richmond", "google ads agency richmond", "google ads company richmond"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-richmond",
  },
  openGraph: {
    title: "Google Ads Agency in Richmond | TML Agency",
    description: "TML offers expert google ads services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-richmond",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Richmond | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Richmond | TML Agency",
    description: "TML offers expert google ads services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
