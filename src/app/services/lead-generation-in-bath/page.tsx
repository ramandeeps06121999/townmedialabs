import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Bath",
  description: "TML offers expert Lead Generation services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation bath", "lead generation agency bath", "lead generation company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-bath",
  },
  openGraph: {
    title: "Lead Generation Agency in Bath",
    description: "TML offers expert Lead Generation services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Bath" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Bath",
    description: "TML offers expert Lead Generation services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInBathPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
