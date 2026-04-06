import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Google Ads Agency in South Delhi",
  description: "TML offers expert Google Ads management services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management south delhi", "Google Ads management agency south delhi", "Google Ads management company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-south-delhi",
  },
  openGraph: {
    title: "Google Ads Agency in South Delhi",
    description: "TML offers expert Google Ads management services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in South Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in South Delhi",
    description: "TML offers expert Google Ads management services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInSouthDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
