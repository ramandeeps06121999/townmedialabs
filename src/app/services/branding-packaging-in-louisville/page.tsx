import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Louisville | TML Agency",
  description: "TML offers expert packaging design services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design louisville", "packaging design agency louisville", "packaging design company louisville"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-louisville",
  },
  openGraph: {
    title: "Packaging Design Agency in Louisville | TML Agency",
    description: "TML offers expert packaging design services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-louisville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Louisville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Louisville | TML Agency",
    description: "TML offers expert packaging design services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
