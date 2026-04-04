import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Christchurch | TML Agency",
  description: "TML offers expert packaging design services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design christchurch", "packaging design agency christchurch", "packaging design christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-christchurch",
  },
  openGraph: {
    title: "Packaging Design Agency in Christchurch | TML Agency",
    description: "TML offers expert packaging design services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Christchurch | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Christchurch | TML Agency",
    description: "TML offers expert packaging design services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
