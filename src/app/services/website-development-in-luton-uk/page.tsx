import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Website Development Agency in Luton",
  description: "TML offers expert Website Development services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development luton", "website development agency luton", "website development company luton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-luton-uk",
  },
  openGraph: {
    title: "Website Development Agency in Luton",
    description: "TML offers expert Website Development services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-luton-uk",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Luton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Luton",
    description: "TML offers expert Website Development services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInLutonUkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
