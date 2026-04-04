import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Cairns | TML Agency",
  description: "TML offers expert lead generation services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation cairns", "lead generation agency cairns", "lead generation company cairns"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-cairns",
  },
  openGraph: {
    title: "Lead Generation Agency in Cairns | TML Agency",
    description: "TML offers expert lead generation services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-cairns",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Cairns | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Cairns | TML Agency",
    description: "TML offers expert lead generation services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
