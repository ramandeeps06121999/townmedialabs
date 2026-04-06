import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Website Development Agency in Napier",
  description: "TML offers expert Website Development services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["website development napier", "website development agency napier", "website development napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-napier",
  },
  openGraph: {
    title: "Website Development Agency in Napier",
    description: "TML offers expert Website Development services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Napier" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Napier",
    description: "TML offers expert Website Development services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInNapierPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
