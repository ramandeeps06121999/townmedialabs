import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Phoenix | TML Agency",
  description: "TML offers expert packaging design services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design phoenix", "packaging design agency phoenix", "packaging design company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-phoenix",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Phoenix | TML Agency",
    description: "TML offers expert packaging design services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Phoenix | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Phoenix | TML Agency",
    description: "TML offers expert packaging design services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
