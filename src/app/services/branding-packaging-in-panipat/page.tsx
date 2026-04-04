import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Panipat | TML Agency",
  description: "TML offers expert branding and packaging services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging panipat", "branding and packaging agency panipat", "branding and packaging company panipat"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-panipat",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Panipat | TML Agency",
    description: "TML offers expert branding and packaging services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Panipat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Panipat | TML Agency",
    description: "TML offers expert branding and packaging services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
