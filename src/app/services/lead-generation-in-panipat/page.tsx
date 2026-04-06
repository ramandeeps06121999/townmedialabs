import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Panipat",
  description: "TML offers expert Lead Generation services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation panipat", "lead generation agency panipat", "lead generation company panipat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-panipat",
  },
  openGraph: {
    title: "Lead Generation Agency in Panipat",
    description: "TML offers expert Lead Generation services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Panipat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Panipat",
    description: "TML offers expert Lead Generation services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInPanipatPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
