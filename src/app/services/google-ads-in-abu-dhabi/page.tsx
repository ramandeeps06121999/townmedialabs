import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Abu Dhabi",
  description: "TML offers expert Google Ads services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads abu dhabi", "google ads agency abu dhabi", "google ads company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-abu-dhabi",
  },
  openGraph: {
    title: "Google Ads Agency in Abu Dhabi",
    description: "TML offers expert Google Ads services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Abu Dhabi",
    description: "TML offers expert Google Ads services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
