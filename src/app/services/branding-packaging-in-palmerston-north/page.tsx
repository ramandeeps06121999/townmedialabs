import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Palmerston North | TML Agency",
  description: "TML offers expert packaging design services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design palmerston north", "packaging design agency palmerston north", "packaging design palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-palmerston-north",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Palmerston North | TML Agency",
    description: "TML offers expert packaging design services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Palmerston North | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Palmerston North | TML Agency",
    description: "TML offers expert packaging design services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInPalmerstonNorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
