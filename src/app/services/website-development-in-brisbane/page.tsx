import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Website Development Agency in Brisbane",
  description: "TML offers expert Website Development services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development brisbane", "website development agency brisbane", "website development company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-brisbane",
  },
  openGraph: {
    title: "Website Development Agency in Brisbane",
    description: "TML offers expert Website Development services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Brisbane",
    description: "TML offers expert Website Development services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInBrisbanePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
