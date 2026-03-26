import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Derby | TML Agency",
  description: "TML offers expert packaging design services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design derby", "packaging design agency derby", "packaging design company derby"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-derby",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Derby | TML Agency",
    description: "TML offers expert packaging design services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-derby",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Derby | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Derby | TML Agency",
    description: "TML offers expert packaging design services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
