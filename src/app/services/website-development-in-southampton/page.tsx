import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Website Development Agency in Southampton",
  description: "TML offers expert Website Development services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development southampton", "website development agency southampton", "website development company southampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-southampton",
  },
  openGraph: {
    title: "Website Development Agency in Southampton",
    description: "TML offers expert Website Development services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Southampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Southampton",
    description: "TML offers expert Website Development services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInSouthamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
