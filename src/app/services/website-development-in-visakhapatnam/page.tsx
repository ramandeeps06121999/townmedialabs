import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Website Development Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert website development services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development visakhapatnam", "website development agency visakhapatnam", "website development company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-visakhapatnam",
  },
  openGraph: {
    title: "Website Development Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert website development services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Visakhapatnam | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert website development services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
