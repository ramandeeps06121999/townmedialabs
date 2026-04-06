import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Website Development Agency in Visakhapatnam",
  description: "TML offers expert Website Development services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development visakhapatnam", "website development agency visakhapatnam", "website development company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-visakhapatnam",
  },
  openGraph: {
    title: "Website Development Agency in Visakhapatnam",
    description: "TML offers expert Website Development services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Visakhapatnam",
    description: "TML offers expert Website Development services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
