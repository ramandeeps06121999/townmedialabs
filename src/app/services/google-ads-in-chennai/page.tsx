import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Chennai | TML Agency",
  description: "TML offers expert Google Ads management services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management chennai", "Google Ads management agency chennai", "Google Ads management company chennai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-chennai",
  },
  openGraph: {
    title: "Best Google Ads Agency in Chennai | TML Agency",
    description: "TML offers expert Google Ads management services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Chennai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Chennai | TML Agency",
    description: "TML offers expert Google Ads management services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
