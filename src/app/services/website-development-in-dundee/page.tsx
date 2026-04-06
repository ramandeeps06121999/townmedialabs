import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Website Development Agency in Dundee",
  description: "TML offers expert Website Development services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development dundee", "website development agency dundee", "website development company dundee"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-dundee",
  },
  openGraph: {
    title: "Website Development Agency in Dundee",
    description: "TML offers expert Website Development services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-dundee",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Dundee" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Dundee",
    description: "TML offers expert Website Development services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInDundeePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
