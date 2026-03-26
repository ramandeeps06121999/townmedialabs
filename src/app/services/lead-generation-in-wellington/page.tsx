import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Wellington | TML Agency",
  description: "TML offers expert lead generation services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["lead generation wellington", "lead generation agency wellington", "lead generation wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-wellington",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Wellington | TML Agency",
    description: "TML offers expert lead generation services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Wellington | TML Agency",
    description: "TML offers expert lead generation services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
