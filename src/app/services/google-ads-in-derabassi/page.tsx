import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Google Ads Agency in Derabassi | TML Agency",
  description: "TML offers expert Google Ads management services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management derabassi", "Google Ads management agency derabassi", "Google Ads management company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-derabassi",
  },
  openGraph: {
    title: "Best Google Ads Agency in Derabassi | TML Agency",
    description: "TML offers expert Google Ads management services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Derabassi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Google Ads Agency in Derabassi | TML Agency",
    description: "TML offers expert Google Ads management services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
