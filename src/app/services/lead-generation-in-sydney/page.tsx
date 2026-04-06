import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Sydney",
  description: "TML offers expert Lead Generation services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation sydney", "lead generation agency sydney", "lead generation company sydney"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-sydney",
  },
  openGraph: {
    title: "Lead Generation Agency in Sydney",
    description: "TML offers expert Lead Generation services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-sydney",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Sydney",
    description: "TML offers expert Lead Generation services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSydneyPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
