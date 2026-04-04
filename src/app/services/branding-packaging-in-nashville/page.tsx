import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Nashville | TML Agency",
  description: "TML offers expert packaging design services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design nashville", "packaging design agency nashville", "packaging design company nashville"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-nashville",
  },
  openGraph: {
    title: "Packaging Design Agency in Nashville | TML Agency",
    description: "TML offers expert packaging design services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-nashville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Nashville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Nashville | TML Agency",
    description: "TML offers expert packaging design services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
