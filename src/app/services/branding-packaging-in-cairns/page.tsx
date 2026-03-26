import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Cairns | TML Agency",
  description: "TML offers expert packaging design services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design cairns", "packaging design agency cairns", "packaging design company cairns"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-cairns",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Cairns | TML Agency",
    description: "TML offers expert packaging design services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-cairns",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Cairns | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Cairns | TML Agency",
    description: "TML offers expert packaging design services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
