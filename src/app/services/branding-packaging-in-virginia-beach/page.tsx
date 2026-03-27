import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Packaging Design Agency in Virginia Beach | TML Agency",
  description: "TML offers expert packaging design services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design virginia beach", "packaging design agency virginia beach", "packaging design company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-virginia-beach",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Virginia Beach | TML Agency",
    description: "TML offers expert packaging design services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Virginia Beach | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Virginia Beach | TML Agency",
    description: "TML offers expert packaging design services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
