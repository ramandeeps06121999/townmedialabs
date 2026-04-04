import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Website Development Agency in Brisbane | TML Agency",
  description: "TML offers expert website development services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development brisbane", "website development agency brisbane", "website development company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-brisbane",
  },
  openGraph: {
    title: "Website Development Agency in Brisbane | TML Agency",
    description: "TML offers expert website development services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Brisbane | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Brisbane | TML Agency",
    description: "TML offers expert website development services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
