import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Branding Agency in Hobart | TML Agency",
  description: "TML offers expert branding services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding hobart", "branding agency hobart", "branding company hobart"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-hobart",
  },
  openGraph: {
    title: "Branding Agency in Hobart | TML Agency",
    description: "TML offers expert branding services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-hobart",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Hobart | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Hobart | TML Agency",
    description: "TML offers expert branding services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
