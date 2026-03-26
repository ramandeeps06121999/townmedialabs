import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Salt Lake City | TML Agency",
  description: "TML offers expert google ads services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads salt lake city", "google ads agency salt lake city", "google ads company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-salt-lake-city",
  },
  openGraph: {
    title: "Best Google Ads Agency in Salt Lake City | TML Agency",
    description: "TML offers expert google ads services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Salt Lake City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Salt Lake City | TML Agency",
    description: "TML offers expert google ads services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
