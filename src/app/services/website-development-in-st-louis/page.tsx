import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Website Development Agency in St. Louis",
  description: "TML offers expert Website Development services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development st. louis", "website development agency st. louis", "website development company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-st-louis",
  },
  openGraph: {
    title: "Website Development Agency in St. Louis",
    description: "TML offers expert Website Development services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in St. Louis",
    description: "TML offers expert Website Development services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
