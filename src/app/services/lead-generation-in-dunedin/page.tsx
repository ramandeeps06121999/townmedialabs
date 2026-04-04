import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Dunedin | TML Agency",
  description: "TML offers expert lead generation services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation dunedin", "lead generation agency dunedin", "lead generation dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-dunedin",
  },
  openGraph: {
    title: "Lead Generation Agency in Dunedin | TML Agency",
    description: "TML offers expert lead generation services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Dunedin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Dunedin | TML Agency",
    description: "TML offers expert lead generation services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInDunedinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
