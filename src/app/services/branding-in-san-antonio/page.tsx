import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Branding Agency in San Antonio | TML Agency",
  description: "TML offers expert branding services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding san antonio", "branding agency san antonio", "branding company san antonio"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-san-antonio",
  },
  openGraph: {
    title: "Branding Agency in San Antonio | TML Agency",
    description: "TML offers expert branding services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-san-antonio",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in San Antonio | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in San Antonio | TML Agency",
    description: "TML offers expert branding services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
