import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Phoenix",
  description: "TML offers expert Google Ads services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads phoenix", "google ads agency phoenix", "google ads company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-phoenix",
  },
  openGraph: {
    title: "Google Ads Agency in Phoenix",
    description: "TML offers expert Google Ads services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Phoenix" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Phoenix",
    description: "TML offers expert Google Ads services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInPhoenixPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
