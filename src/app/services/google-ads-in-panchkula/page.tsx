import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Panchkula",
  description: "TML offers expert Google Ads management services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management panchkula", "Google Ads management agency panchkula", "Google Ads management company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-panchkula",
  },
  openGraph: {
    title: "Google Ads Agency in Panchkula",
    description: "TML offers expert Google Ads management services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Panchkula" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Panchkula",
    description: "TML offers expert Google Ads management services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInPanchkulaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
