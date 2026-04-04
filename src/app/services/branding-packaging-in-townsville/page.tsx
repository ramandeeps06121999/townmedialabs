import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Townsville | TML Agency",
  description: "TML offers expert packaging design services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design townsville", "packaging design agency townsville", "packaging design company townsville"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-townsville",
  },
  openGraph: {
    title: "Packaging Design Agency in Townsville | TML Agency",
    description: "TML offers expert packaging design services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-townsville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Townsville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Townsville | TML Agency",
    description: "TML offers expert packaging design services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
