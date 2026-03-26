import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Pune | TML Agency",
  description: "TML offers expert branding and packaging services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging pune", "branding and packaging agency pune", "branding and packaging company pune"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-pune",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Pune | TML Agency",
    description: "TML offers expert branding and packaging services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Pune | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Pune | TML Agency",
    description: "TML offers expert branding and packaging services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
