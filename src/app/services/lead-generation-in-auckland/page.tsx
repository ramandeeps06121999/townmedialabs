import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Auckland | TML Agency",
  description: "TML offers expert lead generation services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation auckland", "lead generation agency auckland", "lead generation company auckland"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-auckland",
  },
  openGraph: {
    title: "Lead Generation Agency in Auckland | TML Agency",
    description: "TML offers expert lead generation services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-auckland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Auckland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Auckland | TML Agency",
    description: "TML offers expert lead generation services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
