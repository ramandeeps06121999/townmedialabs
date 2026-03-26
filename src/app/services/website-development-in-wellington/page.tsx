import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Wellington | TML Agency",
  description: "TML offers expert website development services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["website development wellington", "website development agency wellington", "website development wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-wellington",
  },
  openGraph: {
    title: "Best Website Development Agency in Wellington | TML Agency",
    description: "TML offers expert website development services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Wellington | TML Agency",
    description: "TML offers expert website development services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
