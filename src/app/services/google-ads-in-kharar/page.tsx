import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Kharar | TML Agency",
  description: "TML offers expert Google Ads management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management kharar", "Google Ads management agency kharar", "Google Ads management company kharar"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-kharar",
  },
  openGraph: {
    title: "Google Ads Agency in Kharar | TML Agency",
    description: "TML offers expert Google Ads management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Kharar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Kharar | TML Agency",
    description: "TML offers expert Google Ads management services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
