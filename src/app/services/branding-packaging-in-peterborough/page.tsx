import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Peterborough | TML Agency",
  description: "TML offers expert packaging design services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design peterborough", "packaging design agency peterborough", "packaging design company peterborough"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-peterborough",
  },
  openGraph: {
    title: "Packaging Design Agency in Peterborough | TML Agency",
    description: "TML offers expert packaging design services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-peterborough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Peterborough | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Peterborough | TML Agency",
    description: "TML offers expert packaging design services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
