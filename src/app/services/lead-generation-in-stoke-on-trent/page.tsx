import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert lead generation services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation stoke-on-trent", "lead generation agency stoke-on-trent", "lead generation company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-stoke-on-trent",
  },
  openGraph: {
    title: "Lead Generation Agency in Stoke-on-Trent | TML Agency",
    description: "TML offers expert lead generation services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Stoke-on-Trent | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Stoke-on-Trent | TML Agency",
    description: "TML offers expert lead generation services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
