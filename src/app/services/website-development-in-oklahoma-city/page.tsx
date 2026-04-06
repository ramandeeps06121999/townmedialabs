import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Website Development Agency in Oklahoma City",
  description: "TML offers expert Website Development services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development oklahoma city", "website development agency oklahoma city", "website development company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-oklahoma-city",
  },
  openGraph: {
    title: "Website Development Agency in Oklahoma City",
    description: "TML offers expert Website Development services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Oklahoma City",
    description: "TML offers expert Website Development services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
