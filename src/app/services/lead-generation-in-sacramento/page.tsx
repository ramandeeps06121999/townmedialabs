import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Sacramento | TML Agency",
  description: "TML offers expert lead generation services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation sacramento", "lead generation agency sacramento", "lead generation company sacramento"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-sacramento",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Sacramento | TML Agency",
    description: "TML offers expert lead generation services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-sacramento",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Sacramento | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Sacramento | TML Agency",
    description: "TML offers expert lead generation services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
