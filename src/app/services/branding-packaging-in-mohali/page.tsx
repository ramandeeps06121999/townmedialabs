import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Mohali | TML Agency",
  description: "TML offers expert branding and packaging services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging mohali", "branding and packaging agency mohali", "branding and packaging company mohali"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-mohali",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Mohali | TML Agency",
    description: "TML offers expert branding and packaging services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-mohali",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Mohali | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Mohali | TML Agency",
    description: "TML offers expert branding and packaging services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
