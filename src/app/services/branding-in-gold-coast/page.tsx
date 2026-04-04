import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Branding Agency in Gold Coast | TML Agency",
  description: "TML offers expert branding services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding gold coast", "branding agency gold coast", "branding company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-gold-coast",
  },
  openGraph: {
    title: "Branding Agency in Gold Coast | TML Agency",
    description: "TML offers expert branding services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Gold Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Gold Coast | TML Agency",
    description: "TML offers expert branding services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
