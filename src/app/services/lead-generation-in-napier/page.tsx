import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Napier",
  description: "TML offers expert Lead Generation services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation napier", "lead generation agency napier", "lead generation napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-napier",
  },
  openGraph: {
    title: "Lead Generation Agency in Napier",
    description: "TML offers expert Lead Generation services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Napier" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Napier",
    description: "TML offers expert Lead Generation services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInNapierPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
