import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Sunderland | TML Agency",
  description: "TML offers expert lead generation services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation sunderland", "lead generation agency sunderland", "lead generation company sunderland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-sunderland",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Sunderland | TML Agency",
    description: "TML offers expert lead generation services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-sunderland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Sunderland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Sunderland | TML Agency",
    description: "TML offers expert lead generation services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
