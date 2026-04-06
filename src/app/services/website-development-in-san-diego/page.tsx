import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Website Development Agency in San Diego",
  description: "TML offers expert Website Development services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development san diego", "website development agency san diego", "website development company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-san-diego",
  },
  openGraph: {
    title: "Website Development Agency in San Diego",
    description: "TML offers expert Website Development services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in San Diego" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in San Diego",
    description: "TML offers expert Website Development services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInSanDiegoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
