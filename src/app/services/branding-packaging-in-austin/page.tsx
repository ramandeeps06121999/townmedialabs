import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Austin | TML Agency",
  description: "TML offers expert packaging design services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design austin", "packaging design agency austin", "packaging design company austin"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-austin",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Austin | TML Agency",
    description: "TML offers expert packaging design services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-austin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Austin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Austin | TML Agency",
    description: "TML offers expert packaging design services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
