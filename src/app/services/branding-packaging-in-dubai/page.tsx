import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Dubai | TML Agency",
  description: "TML offers expert packaging design services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design dubai", "packaging design agency dubai", "packaging design company dubai"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-dubai",
  },
  openGraph: {
    title: "Packaging Design Agency in Dubai | TML Agency",
    description: "TML offers expert packaging design services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-dubai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Dubai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Dubai | TML Agency",
    description: "TML offers expert packaging design services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
