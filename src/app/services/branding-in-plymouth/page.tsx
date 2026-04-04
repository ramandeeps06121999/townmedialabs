import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Branding Agency in Plymouth | TML Agency",
  description: "TML offers expert branding services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding plymouth", "branding agency plymouth", "branding company plymouth"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-plymouth",
  },
  openGraph: {
    title: "Branding Agency in Plymouth | TML Agency",
    description: "TML offers expert branding services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-plymouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Plymouth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Plymouth | TML Agency",
    description: "TML offers expert branding services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
