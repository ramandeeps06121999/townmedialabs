import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in San Francisco | TML Agency",
  description: "TML offers expert packaging design services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design san francisco", "packaging design agency san francisco", "packaging design company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-san-francisco",
  },
  openGraph: {
    title: "Packaging Design Agency in San Francisco | TML Agency",
    description: "TML offers expert packaging design services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in San Francisco | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in San Francisco | TML Agency",
    description: "TML offers expert packaging design services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
