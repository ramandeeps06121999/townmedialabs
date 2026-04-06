import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Mumbai",
  description: "TML offers expert Packaging Design services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design mumbai", "packaging design agency mumbai", "packaging design company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-mumbai",
  },
  openGraph: {
    title: "Packaging Design Agency in Mumbai",
    description: "TML offers expert Packaging Design services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Mumbai",
    description: "TML offers expert Packaging Design services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInMumbaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
