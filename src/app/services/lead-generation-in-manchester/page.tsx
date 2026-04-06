import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Manchester",
  description: "TML offers expert Lead Generation services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation manchester", "lead generation agency manchester", "lead generation company manchester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-manchester",
  },
  openGraph: {
    title: "Lead Generation Agency in Manchester",
    description: "TML offers expert Lead Generation services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-manchester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Manchester" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Manchester",
    description: "TML offers expert Lead Generation services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInManchesterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
