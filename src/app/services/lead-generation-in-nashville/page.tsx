import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Nashville | TML Agency",
  description: "TML offers expert lead generation services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation nashville", "lead generation agency nashville", "lead generation company nashville"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-nashville",
  },
  openGraph: {
    title: "Lead Generation Agency in Nashville | TML Agency",
    description: "TML offers expert lead generation services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-nashville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Nashville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Nashville | TML Agency",
    description: "TML offers expert lead generation services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
