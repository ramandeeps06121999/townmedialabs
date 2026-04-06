import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Hobart",
  description: "TML offers expert Lead Generation services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation hobart", "lead generation agency hobart", "lead generation company hobart"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-hobart",
  },
  openGraph: {
    title: "Lead Generation Agency in Hobart",
    description: "TML offers expert Lead Generation services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-hobart",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Hobart" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Hobart",
    description: "TML offers expert Lead Generation services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInHobartPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
