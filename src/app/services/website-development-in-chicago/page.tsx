import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Chicago | TML Agency",
  description: "TML offers expert website development services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development chicago", "website development agency chicago", "website development company chicago"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-chicago",
  },
  openGraph: {
    title: "Best Website Development Agency in Chicago | TML Agency",
    description: "TML offers expert website development services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-chicago",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Chicago | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Chicago | TML Agency",
    description: "TML offers expert website development services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
