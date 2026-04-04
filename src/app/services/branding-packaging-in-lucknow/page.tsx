import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Lucknow | TML Agency",
  description: "TML offers expert branding and packaging services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging lucknow", "branding and packaging agency lucknow", "branding and packaging company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-lucknow",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Lucknow | TML Agency",
    description: "TML offers expert branding and packaging services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Lucknow | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Lucknow | TML Agency",
    description: "TML offers expert branding and packaging services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
