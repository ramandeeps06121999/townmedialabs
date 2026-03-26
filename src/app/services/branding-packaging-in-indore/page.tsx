import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Indore | TML Agency",
  description: "TML offers expert branding and packaging services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging indore", "branding and packaging agency indore", "branding and packaging company indore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-indore",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Indore | TML Agency",
    description: "TML offers expert branding and packaging services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Indore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Indore | TML Agency",
    description: "TML offers expert branding and packaging services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
