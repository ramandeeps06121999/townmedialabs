import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Geelong",
  description: "TML offers expert Packaging Design services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design geelong", "packaging design agency geelong", "packaging design company geelong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-geelong",
  },
  openGraph: {
    title: "Packaging Design Agency in Geelong",
    description: "TML offers expert Packaging Design services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Geelong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Geelong",
    description: "TML offers expert Packaging Design services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInGeelongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
