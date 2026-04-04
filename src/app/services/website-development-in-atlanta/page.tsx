import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Website Development Agency in Atlanta | TML Agency",
  description: "TML offers expert website development services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development atlanta", "website development agency atlanta", "website development company atlanta"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-atlanta",
  },
  openGraph: {
    title: "Website Development Agency in Atlanta | TML Agency",
    description: "TML offers expert website development services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-atlanta",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Atlanta | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Atlanta | TML Agency",
    description: "TML offers expert website development services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
