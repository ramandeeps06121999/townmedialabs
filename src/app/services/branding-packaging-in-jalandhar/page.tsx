import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Jalandhar | TML Agency",
  description: "TML offers expert branding and packaging services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging jalandhar", "branding and packaging agency jalandhar", "branding and packaging company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-jalandhar",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Jalandhar | TML Agency",
    description: "TML offers expert branding and packaging services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Jalandhar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Jalandhar | TML Agency",
    description: "TML offers expert branding and packaging services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
