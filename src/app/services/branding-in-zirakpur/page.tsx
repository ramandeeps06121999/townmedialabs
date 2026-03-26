import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Zirakpur | TML Agency",
  description: "TML offers expert branding services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding zirakpur", "branding agency zirakpur", "branding company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-zirakpur",
  },
  openGraph: {
    title: "Best Branding Agency in Zirakpur | TML Agency",
    description: "TML offers expert branding services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Zirakpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Zirakpur | TML Agency",
    description: "TML offers expert branding services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
