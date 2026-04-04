import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Cardiff | TML Agency",
  description: "TML offers expert lead generation services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation cardiff", "lead generation agency cardiff", "lead generation company cardiff"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-cardiff",
  },
  openGraph: {
    title: "Lead Generation Agency in Cardiff | TML Agency",
    description: "TML offers expert lead generation services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-cardiff",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Cardiff | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Cardiff | TML Agency",
    description: "TML offers expert lead generation services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
