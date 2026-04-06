import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Ahmedabad",
  description: "TML offers expert Google Ads management services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management ahmedabad", "Google Ads management agency ahmedabad", "Google Ads management company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-ahmedabad",
  },
  openGraph: {
    title: "Google Ads Agency in Ahmedabad",
    description: "TML offers expert Google Ads management services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Ahmedabad",
    description: "TML offers expert Google Ads management services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
