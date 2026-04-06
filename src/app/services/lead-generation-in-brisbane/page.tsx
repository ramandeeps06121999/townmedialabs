import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Brisbane",
  description: "TML offers expert Lead Generation services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation brisbane", "lead generation agency brisbane", "lead generation company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-brisbane",
  },
  openGraph: {
    title: "Lead Generation Agency in Brisbane",
    description: "TML offers expert Lead Generation services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Brisbane",
    description: "TML offers expert Lead Generation services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInBrisbanePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
