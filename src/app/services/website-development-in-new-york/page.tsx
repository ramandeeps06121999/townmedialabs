import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Website Development Agency in New York | TML Agency",
  description: "TML offers expert website development services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development new york", "website development agency new york", "website development company new york"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-new-york",
  },
  openGraph: {
    title: "Website Development Agency in New York | TML Agency",
    description: "TML offers expert website development services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in New York | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in New York | TML Agency",
    description: "TML offers expert website development services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
