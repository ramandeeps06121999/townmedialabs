import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Surat | TML Agency",
  description: "TML offers expert lead generation services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation surat", "lead generation agency surat", "lead generation company surat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-surat",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Surat | TML Agency",
    description: "TML offers expert lead generation services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-surat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Surat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Surat | TML Agency",
    description: "TML offers expert lead generation services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
