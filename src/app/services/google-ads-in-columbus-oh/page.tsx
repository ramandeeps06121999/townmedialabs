import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Columbus",
  description: "TML offers expert Google Ads services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads columbus", "google ads agency columbus", "google ads company columbus"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-columbus-oh",
  },
  openGraph: {
    title: "Google Ads Agency in Columbus",
    description: "TML offers expert Google Ads services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-columbus-oh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Columbus" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Columbus",
    description: "TML offers expert Google Ads services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInColumbusOhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
