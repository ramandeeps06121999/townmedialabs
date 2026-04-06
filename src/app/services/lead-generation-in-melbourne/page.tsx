import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Melbourne",
  description: "TML offers expert Lead Generation services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation melbourne", "lead generation agency melbourne", "lead generation company melbourne"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-melbourne",
  },
  openGraph: {
    title: "Lead Generation Agency in Melbourne",
    description: "TML offers expert Lead Generation services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-melbourne",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Melbourne",
    description: "TML offers expert Lead Generation services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInMelbournePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
