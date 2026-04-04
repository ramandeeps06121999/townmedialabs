import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Salt Lake City | TML Agency",
  description: "TML offers expert packaging design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design salt lake city", "packaging design agency salt lake city", "packaging design company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-salt-lake-city",
  },
  openGraph: {
    title: "Packaging Design Agency in Salt Lake City | TML Agency",
    description: "TML offers expert packaging design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Salt Lake City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Salt Lake City | TML Agency",
    description: "TML offers expert packaging design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
