import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Website Development Agency in Louisville",
  description: "TML offers expert Website Development services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development louisville", "website development agency louisville", "website development company louisville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-louisville",
  },
  openGraph: {
    title: "Website Development Agency in Louisville",
    description: "TML offers expert Website Development services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-louisville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Louisville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Louisville",
    description: "TML offers expert Website Development services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInLouisvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
