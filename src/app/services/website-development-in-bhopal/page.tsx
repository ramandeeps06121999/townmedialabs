import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Website Development Agency in Bhopal",
  description: "TML offers expert Website Development services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development bhopal", "website development agency bhopal", "website development company bhopal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-bhopal",
  },
  openGraph: {
    title: "Website Development Agency in Bhopal",
    description: "TML offers expert Website Development services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-bhopal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Bhopal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Bhopal",
    description: "TML offers expert Website Development services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInBhopalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
