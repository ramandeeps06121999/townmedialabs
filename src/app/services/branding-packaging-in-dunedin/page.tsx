import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Dunedin | TML Agency",
  description: "TML offers expert packaging design services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design dunedin", "packaging design agency dunedin", "packaging design dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-dunedin",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Dunedin | TML Agency",
    description: "TML offers expert packaging design services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Dunedin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Dunedin | TML Agency",
    description: "TML offers expert packaging design services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInDunedinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
