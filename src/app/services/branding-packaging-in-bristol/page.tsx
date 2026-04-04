import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Bristol | TML Agency",
  description: "TML offers expert packaging design services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design bristol", "packaging design agency bristol", "packaging design company bristol"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-bristol",
  },
  openGraph: {
    title: "Packaging Design Agency in Bristol | TML Agency",
    description: "TML offers expert packaging design services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Bristol | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Bristol | TML Agency",
    description: "TML offers expert packaging design services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
