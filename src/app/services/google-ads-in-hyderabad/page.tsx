import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Hyderabad | TML Agency",
  description: "TML offers expert Google Ads management services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management hyderabad", "Google Ads management agency hyderabad", "Google Ads management company hyderabad"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-hyderabad",
  },
  openGraph: {
    title: "Google Ads Agency in Hyderabad | TML Agency",
    description: "TML offers expert Google Ads management services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-hyderabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Hyderabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Hyderabad | TML Agency",
    description: "TML offers expert Google Ads management services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
