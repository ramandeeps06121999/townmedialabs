import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Hamilton | TML Agency",
  description: "TML offers expert branding services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["branding hamilton", "branding agency hamilton", "branding hamilton nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-hamilton",
  },
  openGraph: {
    title: "Best Branding Agency in Hamilton | TML Agency",
    description: "TML offers expert branding services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Hamilton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Hamilton | TML Agency",
    description: "TML offers expert branding services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
