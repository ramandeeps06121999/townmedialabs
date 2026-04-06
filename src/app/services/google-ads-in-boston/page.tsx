import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Boston",
  description: "TML offers expert Google Ads services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads boston", "google ads agency boston", "google ads company boston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-boston",
  },
  openGraph: {
    title: "Google Ads Agency in Boston",
    description: "TML offers expert Google Ads services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-boston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Boston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Boston",
    description: "TML offers expert Google Ads services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInBostonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
