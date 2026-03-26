import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Geelong | TML Agency",
  description: "TML offers expert branding services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding geelong", "branding agency geelong", "branding company geelong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-geelong",
  },
  openGraph: {
    title: "Best Branding Agency in Geelong | TML Agency",
    description: "TML offers expert branding services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Geelong | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Geelong | TML Agency",
    description: "TML offers expert branding services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
