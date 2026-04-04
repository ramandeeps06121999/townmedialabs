import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Southampton | TML Agency",
  description: "TML offers expert packaging design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design southampton", "packaging design agency southampton", "packaging design company southampton"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-southampton",
  },
  openGraph: {
    title: "Packaging Design Agency in Southampton | TML Agency",
    description: "TML offers expert packaging design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Southampton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Southampton | TML Agency",
    description: "TML offers expert packaging design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
