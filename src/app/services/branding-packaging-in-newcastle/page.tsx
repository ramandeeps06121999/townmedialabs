import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Newcastle | TML Agency",
  description: "TML offers expert packaging design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design newcastle", "packaging design agency newcastle", "packaging design company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-newcastle",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Newcastle | TML Agency",
    description: "TML offers expert packaging design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-newcastle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Newcastle | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Newcastle | TML Agency",
    description: "TML offers expert packaging design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInNewcastlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
