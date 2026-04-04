import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Las Vegas | TML Agency",
  description: "TML offers expert packaging design services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design las vegas", "packaging design agency las vegas", "packaging design company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-las-vegas",
  },
  openGraph: {
    title: "Packaging Design Agency in Las Vegas | TML Agency",
    description: "TML offers expert packaging design services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Las Vegas | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Las Vegas | TML Agency",
    description: "TML offers expert packaging design services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
