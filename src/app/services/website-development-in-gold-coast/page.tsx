import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Website Development Agency in Gold Coast | TML Agency",
  description: "TML offers expert website development services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development gold coast", "website development agency gold coast", "website development company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-gold-coast",
  },
  openGraph: {
    title: "Website Development Agency in Gold Coast | TML Agency",
    description: "TML offers expert website development services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Gold Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Gold Coast | TML Agency",
    description: "TML offers expert website development services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
