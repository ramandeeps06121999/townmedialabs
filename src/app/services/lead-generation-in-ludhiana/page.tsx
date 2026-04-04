import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Ludhiana | TML Agency",
  description: "TML offers expert lead generation services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation ludhiana", "lead generation agency ludhiana", "lead generation company ludhiana"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-ludhiana",
  },
  openGraph: {
    title: "Lead Generation Agency in Ludhiana | TML Agency",
    description: "TML offers expert lead generation services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-ludhiana",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Ludhiana | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Ludhiana | TML Agency",
    description: "TML offers expert lead generation services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
