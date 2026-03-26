import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Bristol | TML Agency",
  description: "TML offers expert branding services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding bristol", "branding agency bristol", "branding company bristol"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-bristol",
  },
  openGraph: {
    title: "Best Branding Agency in Bristol | TML Agency",
    description: "TML offers expert branding services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Bristol | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Bristol | TML Agency",
    description: "TML offers expert branding services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
