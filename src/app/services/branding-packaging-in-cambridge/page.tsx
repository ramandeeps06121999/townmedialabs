import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Cambridge | TML Agency",
  description: "TML offers expert packaging design services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design cambridge", "packaging design agency cambridge", "packaging design company cambridge"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-cambridge",
  },
  openGraph: {
    title: "Packaging Design Agency in Cambridge | TML Agency",
    description: "TML offers expert packaging design services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-cambridge",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Cambridge | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Cambridge | TML Agency",
    description: "TML offers expert packaging design services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
