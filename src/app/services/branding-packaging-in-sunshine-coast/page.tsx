import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Sunshine Coast",
  description: "TML offers expert Packaging Design services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design sunshine coast", "packaging design agency sunshine coast", "packaging design company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-sunshine-coast",
  },
  openGraph: {
    title: "Packaging Design Agency in Sunshine Coast",
    description: "TML offers expert Packaging Design services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Sunshine Coast",
    description: "TML offers expert Packaging Design services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
