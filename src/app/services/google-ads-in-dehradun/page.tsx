import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Dehradun | TML Agency",
  description: "TML offers expert Google Ads management services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management dehradun", "Google Ads management agency dehradun", "Google Ads management company dehradun"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-dehradun",
  },
  openGraph: {
    title: "Google Ads Agency in Dehradun | TML Agency",
    description: "TML offers expert Google Ads management services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/google-ads-in-dehradun",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Dehradun | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Dehradun | TML Agency",
    description: "TML offers expert Google Ads management services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
