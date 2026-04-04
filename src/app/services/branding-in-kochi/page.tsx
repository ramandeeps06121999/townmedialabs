import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Branding Agency in Kochi | TML Agency",
  description: "TML offers expert branding services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding kochi", "branding agency kochi", "branding company kochi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-kochi",
  },
  openGraph: {
    title: "Branding Agency in Kochi | TML Agency",
    description: "TML offers expert branding services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-kochi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Kochi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Kochi | TML Agency",
    description: "TML offers expert branding services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
