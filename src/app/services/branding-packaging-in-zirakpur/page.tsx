import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Zirakpur | TML Agency",
  description: "TML offers expert packaging design services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design zirakpur", "packaging design agency zirakpur", "packaging design company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-zirakpur",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Zirakpur | TML Agency",
    description: "TML offers expert packaging design services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Zirakpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Zirakpur | TML Agency",
    description: "TML offers expert packaging design services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
