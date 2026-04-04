import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Panipat | TML Agency",
  description: "TML offers expert lead generation services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation panipat", "lead generation agency panipat", "lead generation company panipat"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-panipat",
  },
  openGraph: {
    title: "Lead Generation Agency in Panipat | TML Agency",
    description: "TML offers expert lead generation services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Panipat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Panipat | TML Agency",
    description: "TML offers expert lead generation services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
