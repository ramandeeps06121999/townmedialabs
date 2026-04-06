import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Milton Keynes",
  description: "TML offers expert Google Ads services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["google ads milton keynes", "google ads agency milton keynes", "google ads company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-milton-keynes",
  },
  openGraph: {
    title: "Google Ads Agency in Milton Keynes",
    description: "TML offers expert Google Ads services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Milton Keynes",
    description: "TML offers expert Google Ads services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleAdsInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
