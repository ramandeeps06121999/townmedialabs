import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Jalandhar | TML Agency",
  description: "TML offers expert website development services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development jalandhar", "website development agency jalandhar", "website development company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-jalandhar",
  },
  openGraph: {
    title: "Best Website Development Agency in Jalandhar | TML Agency",
    description: "TML offers expert website development services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Jalandhar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Jalandhar | TML Agency",
    description: "TML offers expert website development services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
