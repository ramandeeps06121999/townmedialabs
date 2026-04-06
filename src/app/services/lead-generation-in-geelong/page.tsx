import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Geelong",
  description: "TML offers expert Lead Generation services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation geelong", "lead generation agency geelong", "lead generation company geelong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-geelong",
  },
  openGraph: {
    title: "Lead Generation Agency in Geelong",
    description: "TML offers expert Lead Generation services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Geelong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Geelong",
    description: "TML offers expert Lead Generation services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInGeelongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
