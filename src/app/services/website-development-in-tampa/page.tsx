import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Website Development Agency in Tampa | TML Agency",
  description: "TML offers expert website development services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development tampa", "website development agency tampa", "website development company tampa"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-tampa",
  },
  openGraph: {
    title: "Website Development Agency in Tampa | TML Agency",
    description: "TML offers expert website development services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-tampa",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Tampa | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Tampa | TML Agency",
    description: "TML offers expert website development services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
