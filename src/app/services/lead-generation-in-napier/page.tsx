import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Napier | TML Agency",
  description: "TML offers expert lead generation services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation napier", "lead generation agency napier", "lead generation napier nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-napier",
  },
  openGraph: {
    title: "Lead Generation Agency in Napier | TML Agency",
    description: "TML offers expert lead generation services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Napier | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Napier | TML Agency",
    description: "TML offers expert lead generation services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
