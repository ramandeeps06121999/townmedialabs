import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Branding Agency in Cairns | TML Agency",
  description: "TML offers expert branding services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding cairns", "branding agency cairns", "branding company cairns"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-cairns",
  },
  openGraph: {
    title: "Branding Agency in Cairns | TML Agency",
    description: "TML offers expert branding services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-cairns",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Cairns | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Cairns | TML Agency",
    description: "TML offers expert branding services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
