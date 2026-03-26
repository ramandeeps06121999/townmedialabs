import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in San Diego | TML Agency",
  description: "TML offers expert lead generation services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation san diego", "lead generation agency san diego", "lead generation company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-san-diego",
  },
  openGraph: {
    title: "Best Lead Generation Agency in San Diego | TML Agency",
    description: "TML offers expert lead generation services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in San Diego | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in San Diego | TML Agency",
    description: "TML offers expert lead generation services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
