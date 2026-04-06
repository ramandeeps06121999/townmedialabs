import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Hamilton",
  description: "TML offers expert Google Ads services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["google ads hamilton", "google ads agency hamilton", "google ads hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-hamilton",
  },
  openGraph: {
    title: "Google Ads Agency in Hamilton",
    description: "TML offers expert Google Ads services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Hamilton",
    description: "TML offers expert Google Ads services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
