import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Website Development Agency in Omaha",
  description: "TML offers expert Website Development services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development omaha", "website development agency omaha", "website development company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-omaha",
  },
  openGraph: {
    title: "Website Development Agency in Omaha",
    description: "TML offers expert Website Development services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Omaha" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Omaha",
    description: "TML offers expert Website Development services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInOmahaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
