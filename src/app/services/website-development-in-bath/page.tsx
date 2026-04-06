import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Website Development Agency in Bath",
  description: "TML offers expert Website Development services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development bath", "website development agency bath", "website development company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-bath",
  },
  openGraph: {
    title: "Website Development Agency in Bath",
    description: "TML offers expert Website Development services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Bath" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Bath",
    description: "TML offers expert Website Development services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInBathPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
