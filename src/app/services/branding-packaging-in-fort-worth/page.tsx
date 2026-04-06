import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Fort Worth",
  description: "TML offers expert Packaging Design services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design fort worth", "packaging design agency fort worth", "packaging design company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-fort-worth",
  },
  openGraph: {
    title: "Packaging Design Agency in Fort Worth",
    description: "TML offers expert Packaging Design services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Fort Worth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Fort Worth",
    description: "TML offers expert Packaging Design services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInFortWorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
