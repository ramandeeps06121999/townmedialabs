import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Gold Coast",
  description: "TML offers expert Lead Generation services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation gold coast", "lead generation agency gold coast", "lead generation company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-gold-coast",
  },
  openGraph: {
    title: "Lead Generation Agency in Gold Coast",
    description: "TML offers expert Lead Generation services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Gold Coast",
    description: "TML offers expert Lead Generation services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
