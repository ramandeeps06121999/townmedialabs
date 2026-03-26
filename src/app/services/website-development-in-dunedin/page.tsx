import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Dunedin | TML Agency",
  description: "TML offers expert website development services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["website development dunedin", "website development agency dunedin", "website development dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-dunedin",
  },
  openGraph: {
    title: "Best Website Development Agency in Dunedin | TML Agency",
    description: "TML offers expert website development services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Dunedin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Dunedin | TML Agency",
    description: "TML offers expert website development services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInDunedinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
