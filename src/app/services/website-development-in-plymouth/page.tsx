import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Website Development Agency in Plymouth",
  description: "TML offers expert Website Development services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development plymouth", "website development agency plymouth", "website development company plymouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-plymouth",
  },
  openGraph: {
    title: "Website Development Agency in Plymouth",
    description: "TML offers expert Website Development services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-plymouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Plymouth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Plymouth",
    description: "TML offers expert Website Development services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInPlymouthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
