import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Branding Agency in Newcastle | TML Agency",
  description: "TML offers expert branding services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding newcastle", "branding agency newcastle", "branding company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-newcastle",
  },
  openGraph: {
    title: "Branding Agency in Newcastle | TML Agency",
    description: "TML offers expert branding services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-newcastle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Newcastle | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Newcastle | TML Agency",
    description: "TML offers expert branding services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInNewcastlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
