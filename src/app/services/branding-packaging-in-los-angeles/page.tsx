import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Los Angeles",
  description: "TML offers expert Packaging Design services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design los angeles", "packaging design agency los angeles", "packaging design company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-los-angeles",
  },
  openGraph: {
    title: "Packaging Design Agency in Los Angeles",
    description: "TML offers expert Packaging Design services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Los Angeles",
    description: "TML offers expert Packaging Design services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
