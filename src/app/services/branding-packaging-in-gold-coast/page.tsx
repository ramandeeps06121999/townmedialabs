import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Gold Coast",
  description: "TML offers expert Packaging Design services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design gold coast", "packaging design agency gold coast", "packaging design company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-gold-coast",
  },
  openGraph: {
    title: "Packaging Design Agency in Gold Coast",
    description: "TML offers expert Packaging Design services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Gold Coast",
    description: "TML offers expert Packaging Design services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
