import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Branding Agency in Pittsburgh | TML Agency",
  description: "TML offers expert branding services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding pittsburgh", "branding agency pittsburgh", "branding company pittsburgh"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-pittsburgh",
  },
  openGraph: {
    title: "Branding Agency in Pittsburgh | TML Agency",
    description: "TML offers expert branding services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-pittsburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Pittsburgh | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Pittsburgh | TML Agency",
    description: "TML offers expert branding services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
