import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in San Antonio | TML Agency",
  description: "TML offers expert lead generation services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation san antonio", "lead generation agency san antonio", "lead generation company san antonio"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-san-antonio",
  },
  openGraph: {
    title: "Best Lead Generation Agency in San Antonio | TML Agency",
    description: "TML offers expert lead generation services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-san-antonio",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in San Antonio | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in San Antonio | TML Agency",
    description: "TML offers expert lead generation services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
