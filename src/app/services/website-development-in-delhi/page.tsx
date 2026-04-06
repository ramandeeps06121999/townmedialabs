import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Website Development Agency in Delhi",
  description: "TML offers expert Website Development services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development delhi", "website development agency delhi", "website development company delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-delhi",
  },
  openGraph: {
    title: "Website Development Agency in Delhi",
    description: "TML offers expert Website Development services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Delhi",
    description: "TML offers expert Website Development services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
