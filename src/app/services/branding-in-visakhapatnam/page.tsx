import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert branding services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding visakhapatnam", "branding agency visakhapatnam", "branding company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-visakhapatnam",
  },
  openGraph: {
    title: "Best Branding Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert branding services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Visakhapatnam | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert branding services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
