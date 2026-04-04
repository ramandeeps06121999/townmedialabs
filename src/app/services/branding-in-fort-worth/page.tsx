import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Branding Agency in Fort Worth | TML Agency",
  description: "TML offers expert branding services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding fort worth", "branding agency fort worth", "branding company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-fort-worth",
  },
  openGraph: {
    title: "Branding Agency in Fort Worth | TML Agency",
    description: "TML offers expert branding services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Fort Worth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Fort Worth | TML Agency",
    description: "TML offers expert branding services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
