import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Website Development Agency in Bathinda",
  description: "TML offers expert Website Development services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development bathinda", "website development agency bathinda", "website development company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-bathinda",
  },
  openGraph: {
    title: "Website Development Agency in Bathinda",
    description: "TML offers expert Website Development services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Bathinda" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Bathinda",
    description: "TML offers expert Website Development services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInBathindaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
