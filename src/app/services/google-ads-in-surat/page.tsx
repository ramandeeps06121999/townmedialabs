import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Surat | TML Agency",
  description: "TML offers expert Google Ads management services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management surat", "Google Ads management agency surat", "Google Ads management company surat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-surat",
  },
  openGraph: {
    title: "Best Google Ads Agency in Surat | TML Agency",
    description: "TML offers expert Google Ads management services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-surat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Surat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Surat | TML Agency",
    description: "TML offers expert Google Ads management services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
