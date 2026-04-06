import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in New York",
  description: "TML offers expert Lead Generation services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation new york", "lead generation agency new york", "lead generation company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-new-york",
  },
  openGraph: {
    title: "Lead Generation Agency in New York",
    description: "TML offers expert Lead Generation services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in New York",
    description: "TML offers expert Lead Generation services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInNewYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
