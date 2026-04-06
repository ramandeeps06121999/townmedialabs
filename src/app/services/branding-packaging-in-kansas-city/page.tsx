import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Kansas City",
  description: "TML offers expert Packaging Design services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design kansas city", "packaging design agency kansas city", "packaging design company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-kansas-city",
  },
  openGraph: {
    title: "Packaging Design Agency in Kansas City",
    description: "TML offers expert Packaging Design services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Kansas City",
    description: "TML offers expert Packaging Design services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
