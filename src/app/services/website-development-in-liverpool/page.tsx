import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Website Development Agency in Liverpool",
  description: "TML offers expert Website Development services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development liverpool", "website development agency liverpool", "website development company liverpool"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-liverpool",
  },
  openGraph: {
    title: "Website Development Agency in Liverpool",
    description: "TML offers expert Website Development services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-liverpool",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Liverpool" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Liverpool",
    description: "TML offers expert Website Development services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInLiverpoolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
