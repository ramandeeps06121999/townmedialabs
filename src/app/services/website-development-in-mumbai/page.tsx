import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Mumbai | TML Agency",
  description: "TML offers expert website development services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development mumbai", "website development agency mumbai", "website development company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-mumbai",
  },
  openGraph: {
    title: "Best Website Development Agency in Mumbai | TML Agency",
    description: "TML offers expert website development services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Mumbai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Mumbai | TML Agency",
    description: "TML offers expert website development services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
