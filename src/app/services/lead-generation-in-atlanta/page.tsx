import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Atlanta",
  description: "TML offers expert Lead Generation services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation atlanta", "lead generation agency atlanta", "lead generation company atlanta"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-atlanta",
  },
  openGraph: {
    title: "Lead Generation Agency in Atlanta",
    description: "TML offers expert Lead Generation services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-atlanta",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Atlanta" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Atlanta",
    description: "TML offers expert Lead Generation services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInAtlantaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
