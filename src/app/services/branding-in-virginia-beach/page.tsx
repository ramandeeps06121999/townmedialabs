import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Branding Agency in Virginia Beach | TML Agency",
  description: "TML offers expert branding services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding virginia beach", "branding agency virginia beach", "branding company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-virginia-beach",
  },
  openGraph: {
    title: "Branding Agency in Virginia Beach | TML Agency",
    description: "TML offers expert branding services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Virginia Beach | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Virginia Beach | TML Agency",
    description: "TML offers expert branding services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
