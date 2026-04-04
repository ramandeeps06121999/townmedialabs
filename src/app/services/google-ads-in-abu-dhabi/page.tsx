import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert google ads services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads abu dhabi", "google ads agency abu dhabi", "google ads company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-abu-dhabi",
  },
  openGraph: {
    title: "Google Ads Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert google ads services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Abu Dhabi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert google ads services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
