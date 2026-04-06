import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in San Antonio",
  description: "TML offers expert Packaging Design services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design san antonio", "packaging design agency san antonio", "packaging design company san antonio"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-san-antonio",
  },
  openGraph: {
    title: "Packaging Design Agency in San Antonio",
    description: "TML offers expert Packaging Design services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-san-antonio",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in San Antonio" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in San Antonio",
    description: "TML offers expert Packaging Design services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInSanAntonioPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
