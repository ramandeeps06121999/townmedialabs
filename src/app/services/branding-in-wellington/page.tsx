import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Wellington | TML Agency",
  description: "TML offers expert branding services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["branding wellington", "branding agency wellington", "branding wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-wellington",
  },
  openGraph: {
    title: "Best Branding Agency in Wellington | TML Agency",
    description: "TML offers expert branding services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Wellington | TML Agency",
    description: "TML offers expert branding services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
