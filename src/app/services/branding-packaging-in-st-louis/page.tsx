import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in St. Louis | TML Agency",
  description: "TML offers expert packaging design services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design st. louis", "packaging design agency st. louis", "packaging design company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-st-louis",
  },
  openGraph: {
    title: "Best Packaging Design Agency in St. Louis | TML Agency",
    description: "TML offers expert packaging design services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in St. Louis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in St. Louis | TML Agency",
    description: "TML offers expert packaging design services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
