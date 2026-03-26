import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Cincinnati | TML Agency",
  description: "TML offers expert website development services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development cincinnati", "website development agency cincinnati", "website development company cincinnati"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-cincinnati",
  },
  openGraph: {
    title: "Best Website Development Agency in Cincinnati | TML Agency",
    description: "TML offers expert website development services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-cincinnati",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Cincinnati | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Cincinnati | TML Agency",
    description: "TML offers expert website development services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
