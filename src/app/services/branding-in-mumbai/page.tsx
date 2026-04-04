import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Branding Agency in Mumbai | TML Agency",
  description: "TML offers expert branding services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding mumbai", "branding agency mumbai", "branding company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-mumbai",
  },
  openGraph: {
    title: "Branding Agency in Mumbai | TML Agency",
    description: "TML offers expert branding services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Mumbai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Mumbai | TML Agency",
    description: "TML offers expert branding services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
