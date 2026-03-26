import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Kansas City | TML Agency",
  description: "TML offers expert website development services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development kansas city", "website development agency kansas city", "website development company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-kansas-city",
  },
  openGraph: {
    title: "Best Website Development Agency in Kansas City | TML Agency",
    description: "TML offers expert website development services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Kansas City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Kansas City | TML Agency",
    description: "TML offers expert website development services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
