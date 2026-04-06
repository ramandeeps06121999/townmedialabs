import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Mohali",
  description: "TML offers expert Google Ads management services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management mohali", "Google Ads management agency mohali", "Google Ads management company mohali"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-mohali",
  },
  openGraph: {
    title: "Google Ads Agency in Mohali",
    description: "TML offers expert Google Ads management services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-mohali",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Mohali" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Mohali",
    description: "TML offers expert Google Ads management services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInMohaliPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
