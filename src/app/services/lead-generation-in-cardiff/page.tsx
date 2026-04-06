import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Cardiff",
  description: "TML offers expert Lead Generation services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation cardiff", "lead generation agency cardiff", "lead generation company cardiff"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-cardiff",
  },
  openGraph: {
    title: "Lead Generation Agency in Cardiff",
    description: "TML offers expert Lead Generation services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-cardiff",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Cardiff" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Cardiff",
    description: "TML offers expert Lead Generation services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInCardiffPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
