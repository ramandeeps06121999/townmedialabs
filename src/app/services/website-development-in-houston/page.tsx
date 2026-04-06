import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Website Development Agency in Houston",
  description: "TML offers expert Website Development services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development houston", "website development agency houston", "website development company houston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-houston",
  },
  openGraph: {
    title: "Website Development Agency in Houston",
    description: "TML offers expert Website Development services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-houston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Houston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Houston",
    description: "TML offers expert Website Development services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInHoustonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
