import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Adelaide",
  description: "TML offers expert Lead Generation services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation adelaide", "lead generation agency adelaide", "lead generation company adelaide"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-adelaide",
  },
  openGraph: {
    title: "Lead Generation Agency in Adelaide",
    description: "TML offers expert Lead Generation services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-adelaide",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Adelaide" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Adelaide",
    description: "TML offers expert Lead Generation services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInAdelaidePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
