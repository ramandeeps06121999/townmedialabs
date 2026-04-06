import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Noida",
  description: "TML offers expert Google Ads management services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management noida", "Google Ads management agency noida", "Google Ads management company noida"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-noida",
  },
  openGraph: {
    title: "Google Ads Agency in Noida",
    description: "TML offers expert Google Ads management services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-noida",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Noida" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Noida",
    description: "TML offers expert Google Ads management services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInNoidaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
