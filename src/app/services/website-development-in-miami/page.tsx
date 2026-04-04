import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Website Development Agency in Miami | TML Agency",
  description: "TML offers expert website development services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development miami", "website development agency miami", "website development company miami"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-miami",
  },
  openGraph: {
    title: "Website Development Agency in Miami | TML Agency",
    description: "TML offers expert website development services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-miami",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Miami | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Miami | TML Agency",
    description: "TML offers expert website development services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
