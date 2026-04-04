import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Branding Agency in Austin | TML Agency",
  description: "TML offers expert branding services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding austin", "branding agency austin", "branding company austin"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-austin",
  },
  openGraph: {
    title: "Branding Agency in Austin | TML Agency",
    description: "TML offers expert branding services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-austin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Austin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Austin | TML Agency",
    description: "TML offers expert branding services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
