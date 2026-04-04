import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Branding Agency in Panchkula | TML Agency",
  description: "TML offers expert branding services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding panchkula", "branding agency panchkula", "branding company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-panchkula",
  },
  openGraph: {
    title: "Branding Agency in Panchkula | TML Agency",
    description: "TML offers expert branding services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Panchkula | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Panchkula | TML Agency",
    description: "TML offers expert branding services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
