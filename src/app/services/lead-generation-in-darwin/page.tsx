import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Darwin",
  description: "TML offers expert Lead Generation services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation darwin", "lead generation agency darwin", "lead generation company darwin"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-darwin",
  },
  openGraph: {
    title: "Lead Generation Agency in Darwin",
    description: "TML offers expert Lead Generation services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-darwin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Darwin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Darwin",
    description: "TML offers expert Lead Generation services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInDarwinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
