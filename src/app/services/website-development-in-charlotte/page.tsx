import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Website Development Agency in Charlotte | TML Agency",
  description: "TML offers expert website development services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development charlotte", "website development agency charlotte", "website development company charlotte"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-charlotte",
  },
  openGraph: {
    title: "Website Development Agency in Charlotte | TML Agency",
    description: "TML offers expert website development services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-charlotte",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Charlotte | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Charlotte | TML Agency",
    description: "TML offers expert website development services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
