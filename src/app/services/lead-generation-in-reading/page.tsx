import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Reading",
  description: "TML offers expert Lead Generation services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation reading", "lead generation agency reading", "lead generation company reading"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-reading",
  },
  openGraph: {
    title: "Lead Generation Agency in Reading",
    description: "TML offers expert Lead Generation services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-reading",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Reading" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Reading",
    description: "TML offers expert Lead Generation services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInReadingPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
