import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Website Development Agency in Jaipur | TML Agency",
  description: "TML offers expert website development services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development jaipur", "website development agency jaipur", "website development company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-jaipur",
  },
  openGraph: {
    title: "Website Development Agency in Jaipur | TML Agency",
    description: "TML offers expert website development services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Jaipur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Jaipur | TML Agency",
    description: "TML offers expert website development services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
