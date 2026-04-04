import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Delhi | TML Agency",
  description: "TML offers expert packaging design services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design delhi", "packaging design agency delhi", "packaging design company delhi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-delhi",
  },
  openGraph: {
    title: "Packaging Design Agency in Delhi | TML Agency",
    description: "TML offers expert packaging design services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Delhi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Delhi | TML Agency",
    description: "TML offers expert packaging design services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
