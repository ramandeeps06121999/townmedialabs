import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Palmerston North | TML Agency",
  description: "TML offers expert branding services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["branding palmerston north", "branding agency palmerston north", "branding palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-palmerston-north",
  },
  openGraph: {
    title: "Best Branding Agency in Palmerston North | TML Agency",
    description: "TML offers expert branding services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Palmerston North | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Palmerston North | TML Agency",
    description: "TML offers expert branding services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPalmerstonNorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
