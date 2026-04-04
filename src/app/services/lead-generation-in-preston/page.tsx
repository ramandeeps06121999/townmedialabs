import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Preston | TML Agency",
  description: "TML offers expert lead generation services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation preston", "lead generation agency preston", "lead generation company preston"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-preston",
  },
  openGraph: {
    title: "Lead Generation Agency in Preston | TML Agency",
    description: "TML offers expert lead generation services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-preston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Preston | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Preston | TML Agency",
    description: "TML offers expert lead generation services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
