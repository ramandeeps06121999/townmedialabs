import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Website Development Agency in Baltimore | TML Agency",
  description: "TML offers expert website development services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development baltimore", "website development agency baltimore", "website development company baltimore"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-baltimore",
  },
  openGraph: {
    title: "Website Development Agency in Baltimore | TML Agency",
    description: "TML offers expert website development services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-baltimore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Baltimore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Baltimore | TML Agency",
    description: "TML offers expert website development services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
