import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in San Francisco | TML Agency",
  description: "TML offers expert website development services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development san francisco", "website development agency san francisco", "website development company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-san-francisco",
  },
  openGraph: {
    title: "Best Website Development Agency in San Francisco | TML Agency",
    description: "TML offers expert website development services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in San Francisco | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in San Francisco | TML Agency",
    description: "TML offers expert website development services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
