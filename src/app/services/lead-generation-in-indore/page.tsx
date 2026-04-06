import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Indore",
  description: "TML offers expert Lead Generation services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation indore", "lead generation agency indore", "lead generation company indore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-indore",
  },
  openGraph: {
    title: "Lead Generation Agency in Indore",
    description: "TML offers expert Lead Generation services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Indore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Indore",
    description: "TML offers expert Lead Generation services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInIndorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
