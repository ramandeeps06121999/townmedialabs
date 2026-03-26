import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ballarat | TML Agency",
  description: "TML offers expert lead generation services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation ballarat", "lead generation agency ballarat", "lead generation company ballarat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-ballarat",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Ballarat | TML Agency",
    description: "TML offers expert lead generation services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-ballarat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Ballarat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Ballarat | TML Agency",
    description: "TML offers expert lead generation services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
