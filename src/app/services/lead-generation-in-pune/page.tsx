import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Pune",
  description: "TML offers expert Lead Generation services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation pune", "lead generation agency pune", "lead generation company pune"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-pune",
  },
  openGraph: {
    title: "Lead Generation Agency in Pune",
    description: "TML offers expert Lead Generation services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Pune" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Pune",
    description: "TML offers expert Lead Generation services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInPunePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
