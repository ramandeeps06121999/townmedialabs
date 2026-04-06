import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Fujairah",
  description: "TML offers expert Lead Generation services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation fujairah", "lead generation agency fujairah", "lead generation company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-fujairah",
  },
  openGraph: {
    title: "Lead Generation Agency in Fujairah",
    description: "TML offers expert Lead Generation services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Fujairah",
    description: "TML offers expert Lead Generation services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
