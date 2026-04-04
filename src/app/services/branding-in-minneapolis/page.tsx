import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Branding Agency in Minneapolis | TML Agency",
  description: "TML offers expert branding services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding minneapolis", "branding agency minneapolis", "branding company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-minneapolis",
  },
  openGraph: {
    title: "Branding Agency in Minneapolis | TML Agency",
    description: "TML offers expert branding services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Minneapolis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Minneapolis | TML Agency",
    description: "TML offers expert branding services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
