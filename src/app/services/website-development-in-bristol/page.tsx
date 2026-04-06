import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Website Development Agency in Bristol",
  description: "TML offers expert Website Development services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development bristol", "website development agency bristol", "website development company bristol"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-bristol",
  },
  openGraph: {
    title: "Website Development Agency in Bristol",
    description: "TML offers expert Website Development services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Bristol" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Bristol",
    description: "TML offers expert Website Development services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInBristolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
