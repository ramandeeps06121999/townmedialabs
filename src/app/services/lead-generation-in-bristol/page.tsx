import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Bristol | TML Agency",
  description: "TML offers expert lead generation services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation bristol", "lead generation agency bristol", "lead generation company bristol"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-bristol",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Bristol | TML Agency",
    description: "TML offers expert lead generation services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Bristol | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Bristol | TML Agency",
    description: "TML offers expert lead generation services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
