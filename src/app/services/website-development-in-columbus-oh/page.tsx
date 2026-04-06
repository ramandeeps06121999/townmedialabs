import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Website Development Agency in Columbus",
  description: "TML offers expert Website Development services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development columbus", "website development agency columbus", "website development company columbus"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-columbus-oh",
  },
  openGraph: {
    title: "Website Development Agency in Columbus",
    description: "TML offers expert Website Development services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-columbus-oh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Columbus" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Columbus",
    description: "TML offers expert Website Development services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInColumbusOhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
