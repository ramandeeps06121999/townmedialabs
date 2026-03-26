import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sydney | TML Agency",
  description: "TML offers expert branding services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding sydney", "branding agency sydney", "branding company sydney"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-sydney",
  },
  openGraph: {
    title: "Best Branding Agency in Sydney | TML Agency",
    description: "TML offers expert branding services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-sydney",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Sydney | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Sydney | TML Agency",
    description: "TML offers expert branding services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
