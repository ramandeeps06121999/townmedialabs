import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Branding Agency in Boise | TML Agency",
  description: "TML offers expert branding services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding boise", "branding agency boise", "branding company boise"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-boise",
  },
  openGraph: {
    title: "Branding Agency in Boise | TML Agency",
    description: "TML offers expert branding services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-boise",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Boise | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Boise | TML Agency",
    description: "TML offers expert branding services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
