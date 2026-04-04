import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Southampton | TML Agency",
  description: "TML offers expert lead generation services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation southampton", "lead generation agency southampton", "lead generation company southampton"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-southampton",
  },
  openGraph: {
    title: "Lead Generation Agency in Southampton | TML Agency",
    description: "TML offers expert lead generation services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Southampton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Southampton | TML Agency",
    description: "TML offers expert lead generation services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
