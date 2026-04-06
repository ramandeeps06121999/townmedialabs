import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Philadelphia",
  description: "TML offers expert Lead Generation services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation philadelphia", "lead generation agency philadelphia", "lead generation company philadelphia"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-philadelphia",
  },
  openGraph: {
    title: "Lead Generation Agency in Philadelphia",
    description: "TML offers expert Lead Generation services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-philadelphia",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Philadelphia" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Philadelphia",
    description: "TML offers expert Lead Generation services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInPhiladelphiaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
