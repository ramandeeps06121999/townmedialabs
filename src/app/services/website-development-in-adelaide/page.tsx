import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Adelaide | TML Agency",
  description: "TML offers expert website development services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development adelaide", "website development agency adelaide", "website development company adelaide"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-adelaide",
  },
  openGraph: {
    title: "Best Website Development Agency in Adelaide | TML Agency",
    description: "TML offers expert website development services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-adelaide",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Adelaide | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Adelaide | TML Agency",
    description: "TML offers expert website development services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
