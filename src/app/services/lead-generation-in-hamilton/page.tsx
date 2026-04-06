import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Hamilton",
  description: "TML offers expert Lead Generation services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["lead generation hamilton", "lead generation agency hamilton", "lead generation hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-hamilton",
  },
  openGraph: {
    title: "Lead Generation Agency in Hamilton",
    description: "TML offers expert Lead Generation services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Hamilton",
    description: "TML offers expert Lead Generation services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
