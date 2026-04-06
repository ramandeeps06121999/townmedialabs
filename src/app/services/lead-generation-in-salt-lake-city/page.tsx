import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Salt Lake City",
  description: "TML offers expert Lead Generation services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation salt lake city", "lead generation agency salt lake city", "lead generation company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-salt-lake-city",
  },
  openGraph: {
    title: "Lead Generation Agency in Salt Lake City",
    description: "TML offers expert Lead Generation services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Salt Lake City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Salt Lake City",
    description: "TML offers expert Lead Generation services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSaltLakeCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
