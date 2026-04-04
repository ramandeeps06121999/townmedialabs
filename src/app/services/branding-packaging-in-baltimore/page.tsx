import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Baltimore | TML Agency",
  description: "TML offers expert packaging design services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design baltimore", "packaging design agency baltimore", "packaging design company baltimore"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-baltimore",
  },
  openGraph: {
    title: "Packaging Design Agency in Baltimore | TML Agency",
    description: "TML offers expert packaging design services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-baltimore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Baltimore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Baltimore | TML Agency",
    description: "TML offers expert packaging design services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
