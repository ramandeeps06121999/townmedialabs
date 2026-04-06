import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Website Development Agency in Karnal",
  description: "TML offers expert Website Development services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development karnal", "website development agency karnal", "website development company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-karnal",
  },
  openGraph: {
    title: "Website Development Agency in Karnal",
    description: "TML offers expert Website Development services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Karnal",
    description: "TML offers expert Website Development services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
