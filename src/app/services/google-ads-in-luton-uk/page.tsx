import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Luton",
  description: "TML offers expert Google Ads services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads luton", "google ads agency luton", "google ads company luton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-luton-uk",
  },
  openGraph: {
    title: "Google Ads Agency in Luton",
    description: "TML offers expert Google Ads services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-luton-uk",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Luton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Luton",
    description: "TML offers expert Google Ads services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInLutonUkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
