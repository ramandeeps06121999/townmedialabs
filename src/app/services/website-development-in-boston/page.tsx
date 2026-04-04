import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Website Development Agency in Boston | TML Agency",
  description: "TML offers expert website development services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development boston", "website development agency boston", "website development company boston"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-boston",
  },
  openGraph: {
    title: "Website Development Agency in Boston | TML Agency",
    description: "TML offers expert website development services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-boston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Boston | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Boston | TML Agency",
    description: "TML offers expert website development services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
