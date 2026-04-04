import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Miami | TML Agency",
  description: "TML offers expert lead generation services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation miami", "lead generation agency miami", "lead generation company miami"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-miami",
  },
  openGraph: {
    title: "Lead Generation Agency in Miami | TML Agency",
    description: "TML offers expert lead generation services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-miami",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Miami | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Miami | TML Agency",
    description: "TML offers expert lead generation services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
