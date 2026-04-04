import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Kochi | TML Agency",
  description: "TML offers expert lead generation services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation kochi", "lead generation agency kochi", "lead generation company kochi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-kochi",
  },
  openGraph: {
    title: "Lead Generation Agency in Kochi | TML Agency",
    description: "TML offers expert lead generation services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-kochi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Kochi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Kochi | TML Agency",
    description: "TML offers expert lead generation services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
