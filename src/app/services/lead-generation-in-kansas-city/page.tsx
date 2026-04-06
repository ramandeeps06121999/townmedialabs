import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Kansas City",
  description: "TML offers expert Lead Generation services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation kansas city", "lead generation agency kansas city", "lead generation company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-kansas-city",
  },
  openGraph: {
    title: "Lead Generation Agency in Kansas City",
    description: "TML offers expert Lead Generation services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Kansas City",
    description: "TML offers expert Lead Generation services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
