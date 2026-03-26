import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Bathinda | TML Agency",
  description: "TML offers expert packaging design services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design bathinda", "packaging design agency bathinda", "packaging design company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-bathinda",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Bathinda | TML Agency",
    description: "TML offers expert packaging design services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Bathinda | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Bathinda | TML Agency",
    description: "TML offers expert packaging design services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
