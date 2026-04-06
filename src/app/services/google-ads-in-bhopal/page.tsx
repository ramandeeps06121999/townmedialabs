import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Bhopal",
  description: "TML offers expert Google Ads management services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management bhopal", "Google Ads management agency bhopal", "Google Ads management company bhopal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-bhopal",
  },
  openGraph: {
    title: "Google Ads Agency in Bhopal",
    description: "TML offers expert Google Ads management services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-bhopal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Bhopal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Bhopal",
    description: "TML offers expert Google Ads management services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInBhopalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
