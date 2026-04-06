import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Kolkata",
  description: "TML offers expert Google Ads management services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management kolkata", "Google Ads management agency kolkata", "Google Ads management company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-kolkata",
  },
  openGraph: {
    title: "Google Ads Agency in Kolkata",
    description: "TML offers expert Google Ads management services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Kolkata",
    description: "TML offers expert Google Ads management services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInKolkataPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
