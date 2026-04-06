import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Zirakpur",
  description: "TML offers expert Lead Generation services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation zirakpur", "lead generation agency zirakpur", "lead generation company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-zirakpur",
  },
  openGraph: {
    title: "Lead Generation Agency in Zirakpur",
    description: "TML offers expert Lead Generation services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Zirakpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Zirakpur",
    description: "TML offers expert Lead Generation services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInZirakpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
