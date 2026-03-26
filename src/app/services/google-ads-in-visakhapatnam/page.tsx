import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert Google Ads management services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management visakhapatnam", "Google Ads management agency visakhapatnam", "Google Ads management company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-visakhapatnam",
  },
  openGraph: {
    title: "Best Google Ads Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert Google Ads management services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Visakhapatnam | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert Google Ads management services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
