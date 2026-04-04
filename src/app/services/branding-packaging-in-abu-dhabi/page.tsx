import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert packaging design services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design abu dhabi", "packaging design agency abu dhabi", "packaging design company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-abu-dhabi",
  },
  openGraph: {
    title: "Packaging Design Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert packaging design services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Abu Dhabi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert packaging design services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
