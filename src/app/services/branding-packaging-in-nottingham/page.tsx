import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Nottingham | TML Agency",
  description: "TML offers expert packaging design services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design nottingham", "packaging design agency nottingham", "packaging design company nottingham"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-nottingham",
  },
  openGraph: {
    title: "Packaging Design Agency in Nottingham | TML Agency",
    description: "TML offers expert packaging design services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-nottingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Nottingham | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Nottingham | TML Agency",
    description: "TML offers expert packaging design services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
