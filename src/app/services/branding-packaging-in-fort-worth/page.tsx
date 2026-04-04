import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Fort Worth | TML Agency",
  description: "TML offers expert packaging design services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design fort worth", "packaging design agency fort worth", "packaging design company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-fort-worth",
  },
  openGraph: {
    title: "Packaging Design Agency in Fort Worth | TML Agency",
    description: "TML offers expert packaging design services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Fort Worth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Fort Worth | TML Agency",
    description: "TML offers expert packaging design services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
