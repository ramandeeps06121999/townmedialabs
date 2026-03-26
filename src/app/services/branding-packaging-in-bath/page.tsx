import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Bath | TML Agency",
  description: "TML offers expert packaging design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design bath", "packaging design agency bath", "packaging design company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-bath",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Bath | TML Agency",
    description: "TML offers expert packaging design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Bath | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Bath | TML Agency",
    description: "TML offers expert packaging design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
