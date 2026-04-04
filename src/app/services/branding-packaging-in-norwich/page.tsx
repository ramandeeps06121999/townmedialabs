import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Norwich | TML Agency",
  description: "TML offers expert packaging design services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design norwich", "packaging design agency norwich", "packaging design company norwich"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-norwich",
  },
  openGraph: {
    title: "Packaging Design Agency in Norwich | TML Agency",
    description: "TML offers expert packaging design services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-norwich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Norwich | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Norwich | TML Agency",
    description: "TML offers expert packaging design services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
