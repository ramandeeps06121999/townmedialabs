import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Honolulu | TML Agency",
  description: "TML offers expert lead generation services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation honolulu", "lead generation agency honolulu", "lead generation company honolulu"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-honolulu",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Honolulu | TML Agency",
    description: "TML offers expert lead generation services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-honolulu",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Honolulu | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Honolulu | TML Agency",
    description: "TML offers expert lead generation services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
