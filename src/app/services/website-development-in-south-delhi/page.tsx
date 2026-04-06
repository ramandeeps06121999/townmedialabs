import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Website Development Agency in South Delhi",
  description: "TML offers expert Website Development services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development south delhi", "website development agency south delhi", "website development company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-south-delhi",
  },
  openGraph: {
    title: "Website Development Agency in South Delhi",
    description: "TML offers expert Website Development services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in South Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in South Delhi",
    description: "TML offers expert Website Development services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInSouthDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
