import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Hobart | TML Agency",
  description: "TML offers expert website development services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development hobart", "website development agency hobart", "website development company hobart"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-hobart",
  },
  openGraph: {
    title: "Best Website Development Agency in Hobart | TML Agency",
    description: "TML offers expert website development services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-hobart",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Hobart | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Hobart | TML Agency",
    description: "TML offers expert website development services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
