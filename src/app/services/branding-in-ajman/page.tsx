import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Branding Agency in Ajman | TML Agency",
  description: "TML offers expert branding services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ajman", "branding agency ajman", "branding company ajman"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-ajman",
  },
  openGraph: {
    title: "Branding Agency in Ajman | TML Agency",
    description: "TML offers expert branding services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-ajman",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ajman | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Ajman | TML Agency",
    description: "TML offers expert branding services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
