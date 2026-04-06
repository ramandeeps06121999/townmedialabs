import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Wellington",
  description: "TML offers expert Packaging Design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design wellington", "packaging design agency wellington", "packaging design wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-wellington",
  },
  openGraph: {
    title: "Packaging Design Agency in Wellington",
    description: "TML offers expert Packaging Design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Wellington" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Wellington",
    description: "TML offers expert Packaging Design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInWellingtonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
