import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Detroit",
  description: "TML offers expert Packaging Design services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design detroit", "packaging design agency detroit", "packaging design company detroit"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-detroit",
  },
  openGraph: {
    title: "Packaging Design Agency in Detroit",
    description: "TML offers expert Packaging Design services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Detroit" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Detroit",
    description: "TML offers expert Packaging Design services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInDetroitPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
