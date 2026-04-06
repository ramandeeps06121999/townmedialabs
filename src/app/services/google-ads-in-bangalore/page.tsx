import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Bangalore",
  description: "TML offers expert Google Ads management services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management bangalore", "Google Ads management agency bangalore", "Google Ads management company bangalore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-bangalore",
  },
  openGraph: {
    title: "Google Ads Agency in Bangalore",
    description: "TML offers expert Google Ads management services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-bangalore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Bangalore",
    description: "TML offers expert Google Ads management services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInBangalorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
