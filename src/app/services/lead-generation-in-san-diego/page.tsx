import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in San Diego",
  description: "TML offers expert Lead Generation services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation san diego", "lead generation agency san diego", "lead generation company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-san-diego",
  },
  openGraph: {
    title: "Lead Generation Agency in San Diego",
    description: "TML offers expert Lead Generation services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in San Diego" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in San Diego",
    description: "TML offers expert Lead Generation services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSanDiegoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
