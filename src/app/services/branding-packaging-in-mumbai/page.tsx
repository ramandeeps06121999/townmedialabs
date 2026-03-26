import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Mumbai | TML Agency",
  description: "TML offers expert packaging design services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design mumbai", "packaging design agency mumbai", "packaging design company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-mumbai",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Mumbai | TML Agency",
    description: "TML offers expert packaging design services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Mumbai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Mumbai | TML Agency",
    description: "TML offers expert packaging design services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
