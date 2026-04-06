import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Chennai",
  description: "TML offers expert Google Ads management services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management chennai", "Google Ads management agency chennai", "Google Ads management company chennai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-chennai",
  },
  openGraph: {
    title: "Google Ads Agency in Chennai",
    description: "TML offers expert Google Ads management services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Chennai",
    description: "TML offers expert Google Ads management services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInChennaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
