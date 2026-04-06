import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Palmerston North",
  description: "TML offers expert Lead Generation services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation palmerston north", "lead generation agency palmerston north", "lead generation palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-palmerston-north",
  },
  openGraph: {
    title: "Lead Generation Agency in Palmerston North",
    description: "TML offers expert Lead Generation services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Palmerston North",
    description: "TML offers expert Lead Generation services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
