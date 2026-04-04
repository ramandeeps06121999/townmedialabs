import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Indore | TML Agency",
  description: "TML offers expert Google Ads management services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management indore", "Google Ads management agency indore", "Google Ads management company indore"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-indore",
  },
  openGraph: {
    title: "Google Ads Agency in Indore | TML Agency",
    description: "TML offers expert Google Ads management services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Indore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Indore | TML Agency",
    description: "TML offers expert Google Ads management services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
