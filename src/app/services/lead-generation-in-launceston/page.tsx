import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Launceston",
  description: "TML offers expert Lead Generation services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation launceston", "lead generation agency launceston", "lead generation company launceston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-launceston",
  },
  openGraph: {
    title: "Lead Generation Agency in Launceston",
    description: "TML offers expert Lead Generation services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-launceston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Launceston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Launceston",
    description: "TML offers expert Lead Generation services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInLauncestonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
