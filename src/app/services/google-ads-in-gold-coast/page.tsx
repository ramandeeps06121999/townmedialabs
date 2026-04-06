import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Gold Coast",
  description: "TML offers expert Google Ads services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads gold coast", "google ads agency gold coast", "google ads company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-gold-coast",
  },
  openGraph: {
    title: "Google Ads Agency in Gold Coast",
    description: "TML offers expert Google Ads services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Gold Coast",
    description: "TML offers expert Google Ads services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
