import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Website Development Agency in Karnal | TML Agency",
  description: "TML offers expert website development services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development karnal", "website development agency karnal", "website development company karnal"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-karnal",
  },
  openGraph: {
    title: "Website Development Agency in Karnal | TML Agency",
    description: "TML offers expert website development services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Karnal | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Karnal | TML Agency",
    description: "TML offers expert website development services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
