import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Website Development Agency in Raleigh | TML Agency",
  description: "TML offers expert website development services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development raleigh", "website development agency raleigh", "website development company raleigh"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-raleigh",
  },
  openGraph: {
    title: "Website Development Agency in Raleigh | TML Agency",
    description: "TML offers expert website development services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-raleigh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Raleigh | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Raleigh | TML Agency",
    description: "TML offers expert website development services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
