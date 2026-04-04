import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Website Development Agency in Napier | TML Agency",
  description: "TML offers expert website development services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["website development napier", "website development agency napier", "website development napier nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-napier",
  },
  openGraph: {
    title: "Website Development Agency in Napier | TML Agency",
    description: "TML offers expert website development services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Napier | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Napier | TML Agency",
    description: "TML offers expert website development services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
