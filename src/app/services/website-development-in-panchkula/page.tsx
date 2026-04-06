import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Website Development Agency in Panchkula",
  description: "TML offers expert Website Development services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development panchkula", "website development agency panchkula", "website development company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-panchkula",
  },
  openGraph: {
    title: "Website Development Agency in Panchkula",
    description: "TML offers expert Website Development services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Panchkula" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Panchkula",
    description: "TML offers expert Website Development services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInPanchkulaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
