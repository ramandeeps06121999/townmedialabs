import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Website Development Agency in Los Angeles",
  description: "TML offers expert Website Development services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development los angeles", "website development agency los angeles", "website development company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-los-angeles",
  },
  openGraph: {
    title: "Website Development Agency in Los Angeles",
    description: "TML offers expert Website Development services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Los Angeles",
    description: "TML offers expert Website Development services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
