import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Coimbatore",
  description: "TML offers expert Lead Generation services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation coimbatore", "lead generation agency coimbatore", "lead generation company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-coimbatore",
  },
  openGraph: {
    title: "Lead Generation Agency in Coimbatore",
    description: "TML offers expert Lead Generation services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Coimbatore",
    description: "TML offers expert Lead Generation services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInCoimbatorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
