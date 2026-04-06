import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["new_york"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in New York",
  description: "TML offers expert Packaging Design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design new york", "packaging design agency new york", "packaging design company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-new-york",
  },
  openGraph: {
    title: "Packaging Design Agency in New York",
    description: "TML offers expert Packaging Design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in New York",
    description: "TML offers expert Packaging Design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInNewYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
