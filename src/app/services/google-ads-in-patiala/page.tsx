import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Patiala | TML Agency",
  description: "TML offers expert Google Ads management services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management patiala", "Google Ads management agency patiala", "Google Ads management company patiala"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-patiala",
  },
  openGraph: {
    title: "Google Ads Agency in Patiala | TML Agency",
    description: "TML offers expert Google Ads management services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-patiala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Patiala | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Patiala | TML Agency",
    description: "TML offers expert Google Ads management services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
