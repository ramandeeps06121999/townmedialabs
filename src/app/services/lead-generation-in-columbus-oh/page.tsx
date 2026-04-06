import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Columbus",
  description: "TML offers expert Lead Generation services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation columbus", "lead generation agency columbus", "lead generation company columbus"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-columbus-oh",
  },
  openGraph: {
    title: "Lead Generation Agency in Columbus",
    description: "TML offers expert Lead Generation services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-columbus-oh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Columbus" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Columbus",
    description: "TML offers expert Lead Generation services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInColumbusOhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
