import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Website Development Agency in Ghaziabad",
  description: "TML offers expert Website Development services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development ghaziabad", "website development agency ghaziabad", "website development company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-ghaziabad",
  },
  openGraph: {
    title: "Website Development Agency in Ghaziabad",
    description: "TML offers expert Website Development services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Ghaziabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Ghaziabad",
    description: "TML offers expert Website Development services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInGhaziabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
