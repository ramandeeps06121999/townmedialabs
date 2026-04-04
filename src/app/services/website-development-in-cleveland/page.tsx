import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Website Development Agency in Cleveland | TML Agency",
  description: "TML offers expert website development services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development cleveland", "website development agency cleveland", "website development company cleveland"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-cleveland",
  },
  openGraph: {
    title: "Website Development Agency in Cleveland | TML Agency",
    description: "TML offers expert website development services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-cleveland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Cleveland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Cleveland | TML Agency",
    description: "TML offers expert website development services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
