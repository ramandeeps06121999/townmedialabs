import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Panipat | TML Agency",
  description: "TML offers expert branding services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding panipat", "branding agency panipat", "branding company panipat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-panipat",
  },
  openGraph: {
    title: "Best Branding Agency in Panipat | TML Agency",
    description: "TML offers expert branding services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Panipat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Panipat | TML Agency",
    description: "TML offers expert branding services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
