import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Website Development Agency in Chicago",
  description: "TML offers expert Website Development services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development chicago", "website development agency chicago", "website development company chicago"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-chicago",
  },
  openGraph: {
    title: "Website Development Agency in Chicago",
    description: "TML offers expert Website Development services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-chicago",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Chicago" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Chicago",
    description: "TML offers expert Website Development services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInChicagoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
