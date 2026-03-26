import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Oklahoma City | TML Agency",
  description: "TML offers expert google ads services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads oklahoma city", "google ads agency oklahoma city", "google ads company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-oklahoma-city",
  },
  openGraph: {
    title: "Best Google Ads Agency in Oklahoma City | TML Agency",
    description: "TML offers expert google ads services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Oklahoma City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Oklahoma City | TML Agency",
    description: "TML offers expert google ads services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
