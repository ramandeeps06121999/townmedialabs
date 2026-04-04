import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Branding Agency in Indianapolis | TML Agency",
  description: "TML offers expert branding services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding indianapolis", "branding agency indianapolis", "branding company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-indianapolis",
  },
  openGraph: {
    title: "Branding Agency in Indianapolis | TML Agency",
    description: "TML offers expert branding services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Indianapolis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Indianapolis | TML Agency",
    description: "TML offers expert branding services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
