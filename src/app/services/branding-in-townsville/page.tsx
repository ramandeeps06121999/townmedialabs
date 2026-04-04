import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Branding Agency in Townsville | TML Agency",
  description: "TML offers expert branding services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding townsville", "branding agency townsville", "branding company townsville"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-townsville",
  },
  openGraph: {
    title: "Branding Agency in Townsville | TML Agency",
    description: "TML offers expert branding services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-townsville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Townsville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Townsville | TML Agency",
    description: "TML offers expert branding services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
