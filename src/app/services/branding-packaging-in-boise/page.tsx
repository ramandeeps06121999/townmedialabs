import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Boise | TML Agency",
  description: "TML offers expert packaging design services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design boise", "packaging design agency boise", "packaging design company boise"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-boise",
  },
  openGraph: {
    title: "Packaging Design Agency in Boise | TML Agency",
    description: "TML offers expert packaging design services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-boise",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Boise | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Boise | TML Agency",
    description: "TML offers expert packaging design services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
