import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Auckland | TML Agency",
  description: "TML offers expert packaging design services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design auckland", "packaging design agency auckland", "packaging design company auckland"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-auckland",
  },
  openGraph: {
    title: "Packaging Design Agency in Auckland | TML Agency",
    description: "TML offers expert packaging design services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-auckland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Auckland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Auckland | TML Agency",
    description: "TML offers expert packaging design services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
