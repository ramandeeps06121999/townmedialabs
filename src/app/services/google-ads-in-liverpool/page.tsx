import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Liverpool",
  description: "TML offers expert Google Ads services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads liverpool", "google ads agency liverpool", "google ads company liverpool"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-liverpool",
  },
  openGraph: {
    title: "Google Ads Agency in Liverpool",
    description: "TML offers expert Google Ads services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-liverpool",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Liverpool" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Liverpool",
    description: "TML offers expert Google Ads services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInLiverpoolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
