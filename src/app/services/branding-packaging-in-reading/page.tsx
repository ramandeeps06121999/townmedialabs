import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Reading | TML Agency",
  description: "TML offers expert packaging design services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design reading", "packaging design agency reading", "packaging design company reading"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-reading",
  },
  openGraph: {
    title: "Packaging Design Agency in Reading | TML Agency",
    description: "TML offers expert packaging design services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-reading",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Reading | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Reading | TML Agency",
    description: "TML offers expert packaging design services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
