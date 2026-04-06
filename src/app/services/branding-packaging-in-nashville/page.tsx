import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Nashville",
  description: "TML offers expert Packaging Design services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design nashville", "packaging design agency nashville", "packaging design company nashville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-nashville",
  },
  openGraph: {
    title: "Packaging Design Agency in Nashville",
    description: "TML offers expert Packaging Design services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-nashville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Nashville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Nashville",
    description: "TML offers expert Packaging Design services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInNashvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
