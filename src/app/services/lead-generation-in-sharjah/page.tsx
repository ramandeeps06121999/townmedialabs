import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Sharjah",
  description: "TML offers expert Lead Generation services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation sharjah", "lead generation agency sharjah", "lead generation company sharjah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-sharjah",
  },
  openGraph: {
    title: "Lead Generation Agency in Sharjah",
    description: "TML offers expert Lead Generation services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-sharjah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Sharjah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Sharjah",
    description: "TML offers expert Lead Generation services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInSharjahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
