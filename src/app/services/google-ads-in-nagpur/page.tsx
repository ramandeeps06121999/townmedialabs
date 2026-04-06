import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Nagpur",
  description: "TML offers expert Google Ads management services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management nagpur", "Google Ads management agency nagpur", "Google Ads management company nagpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-nagpur",
  },
  openGraph: {
    title: "Google Ads Agency in Nagpur",
    description: "TML offers expert Google Ads management services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-nagpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Nagpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Nagpur",
    description: "TML offers expert Google Ads management services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInNagpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
