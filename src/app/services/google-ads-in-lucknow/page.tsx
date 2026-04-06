import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Lucknow",
  description: "TML offers expert Google Ads management services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management lucknow", "Google Ads management agency lucknow", "Google Ads management company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-lucknow",
  },
  openGraph: {
    title: "Google Ads Agency in Lucknow",
    description: "TML offers expert Google Ads management services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Lucknow",
    description: "TML offers expert Google Ads management services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
