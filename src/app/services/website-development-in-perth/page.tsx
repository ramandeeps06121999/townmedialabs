import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Website Development Agency in Perth | TML Agency",
  description: "TML offers expert website development services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development perth", "website development agency perth", "website development company perth"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-perth",
  },
  openGraph: {
    title: "Website Development Agency in Perth | TML Agency",
    description: "TML offers expert website development services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-perth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Perth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Perth | TML Agency",
    description: "TML offers expert website development services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
