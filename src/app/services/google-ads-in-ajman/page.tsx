import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Ajman",
  description: "TML offers expert Google Ads services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads ajman", "google ads agency ajman", "google ads company ajman"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-ajman",
  },
  openGraph: {
    title: "Google Ads Agency in Ajman",
    description: "TML offers expert Google Ads services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-ajman",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Ajman" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Ajman",
    description: "TML offers expert Google Ads services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInAjmanPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
