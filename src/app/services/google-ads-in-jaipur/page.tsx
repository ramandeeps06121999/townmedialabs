import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Jaipur",
  description: "TML offers expert Google Ads management services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management jaipur", "Google Ads management agency jaipur", "Google Ads management company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-jaipur",
  },
  openGraph: {
    title: "Google Ads Agency in Jaipur",
    description: "TML offers expert Google Ads management services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Jaipur",
    description: "TML offers expert Google Ads management services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInJaipurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
