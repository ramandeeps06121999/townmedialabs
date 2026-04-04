import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Website Development Agency in Fort Worth | TML Agency",
  description: "TML offers expert website development services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development fort worth", "website development agency fort worth", "website development company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-fort-worth",
  },
  openGraph: {
    title: "Website Development Agency in Fort Worth | TML Agency",
    description: "TML offers expert website development services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Fort Worth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Fort Worth | TML Agency",
    description: "TML offers expert website development services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
