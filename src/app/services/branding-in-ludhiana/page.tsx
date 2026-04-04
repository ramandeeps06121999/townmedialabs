import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Branding Agency in Ludhiana | TML Agency",
  description: "TML offers expert branding services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ludhiana", "branding agency ludhiana", "branding company ludhiana"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-ludhiana",
  },
  openGraph: {
    title: "Branding Agency in Ludhiana | TML Agency",
    description: "TML offers expert branding services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-ludhiana",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ludhiana | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Ludhiana | TML Agency",
    description: "TML offers expert branding services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
