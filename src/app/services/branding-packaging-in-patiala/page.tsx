import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Patiala | TML Agency",
  description: "TML offers expert branding and packaging services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging patiala", "branding and packaging agency patiala", "branding and packaging company patiala"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-patiala",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Patiala | TML Agency",
    description: "TML offers expert branding and packaging services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-patiala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Patiala | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Patiala | TML Agency",
    description: "TML offers expert branding and packaging services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
