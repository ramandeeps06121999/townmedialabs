import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Karnal | TML Agency",
  description: "TML offers expert lead generation services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation karnal", "lead generation agency karnal", "lead generation company karnal"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-karnal",
  },
  openGraph: {
    title: "Lead Generation Agency in Karnal | TML Agency",
    description: "TML offers expert lead generation services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/lead-generation-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Karnal | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Karnal | TML Agency",
    description: "TML offers expert lead generation services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
