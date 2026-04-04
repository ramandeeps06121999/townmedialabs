import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Website Development Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert website development services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development sunshine coast", "website development agency sunshine coast", "website development company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-sunshine-coast",
  },
  openGraph: {
    title: "Website Development Agency in Sunshine Coast | TML Agency",
    description: "TML offers expert website development services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Sunshine Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Sunshine Coast | TML Agency",
    description: "TML offers expert website development services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
