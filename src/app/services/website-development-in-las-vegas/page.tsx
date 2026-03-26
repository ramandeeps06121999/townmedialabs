import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Las Vegas | TML Agency",
  description: "TML offers expert website development services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development las vegas", "website development agency las vegas", "website development company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-las-vegas",
  },
  openGraph: {
    title: "Best Website Development Agency in Las Vegas | TML Agency",
    description: "TML offers expert website development services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Las Vegas | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Las Vegas | TML Agency",
    description: "TML offers expert website development services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
