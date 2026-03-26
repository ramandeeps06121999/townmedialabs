import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Omaha | TML Agency",
  description: "TML offers expert website development services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development omaha", "website development agency omaha", "website development company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-omaha",
  },
  openGraph: {
    title: "Best Website Development Agency in Omaha | TML Agency",
    description: "TML offers expert website development services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Omaha | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Omaha | TML Agency",
    description: "TML offers expert website development services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
