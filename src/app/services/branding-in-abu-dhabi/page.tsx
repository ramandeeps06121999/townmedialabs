import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Branding Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert branding services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding abu dhabi", "branding agency abu dhabi", "branding company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-abu-dhabi",
  },
  openGraph: {
    title: "Branding Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert branding services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Abu Dhabi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert branding services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
