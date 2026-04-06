import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Website Development Agency in Bournemouth",
  description: "TML offers expert Website Development services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development bournemouth", "website development agency bournemouth", "website development company bournemouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-bournemouth",
  },
  openGraph: {
    title: "Website Development Agency in Bournemouth",
    description: "TML offers expert Website Development services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-bournemouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Bournemouth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Bournemouth",
    description: "TML offers expert Website Development services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInBournemouthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
