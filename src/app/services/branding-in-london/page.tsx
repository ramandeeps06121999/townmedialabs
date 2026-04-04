import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Branding Agency in London | TML Agency",
  description: "TML offers expert branding services in London. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding london", "branding agency london", "branding company london"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-london",
  },
  openGraph: {
    title: "Branding Agency in London | TML Agency",
    description: "TML offers expert branding services in London. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-london",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in London | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in London | TML Agency",
    description: "TML offers expert branding services in London. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
