import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Detroit | TML Agency",
  description: "TML offers expert lead generation services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation detroit", "lead generation agency detroit", "lead generation company detroit"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-detroit",
  },
  openGraph: {
    title: "Lead Generation Agency in Detroit | TML Agency",
    description: "TML offers expert lead generation services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Detroit | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Detroit | TML Agency",
    description: "TML offers expert lead generation services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
