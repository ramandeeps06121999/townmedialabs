import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Website Development Agency in Zirakpur | TML Agency",
  description: "TML offers expert website development services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development zirakpur", "website development agency zirakpur", "website development company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-zirakpur",
  },
  openGraph: {
    title: "Website Development Agency in Zirakpur | TML Agency",
    description: "TML offers expert website development services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Zirakpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Zirakpur | TML Agency",
    description: "TML offers expert website development services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
