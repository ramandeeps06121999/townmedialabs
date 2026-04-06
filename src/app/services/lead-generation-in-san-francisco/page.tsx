import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in San Francisco",
  description: "TML offers expert Lead Generation services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation san francisco", "lead generation agency san francisco", "lead generation company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-san-francisco",
  },
  openGraph: {
    title: "Lead Generation Agency in San Francisco",
    description: "TML offers expert Lead Generation services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in San Francisco" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in San Francisco",
    description: "TML offers expert Lead Generation services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSanFranciscoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
