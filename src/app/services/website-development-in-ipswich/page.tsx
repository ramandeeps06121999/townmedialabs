import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Website Development Agency in Ipswich | TML Agency",
  description: "TML offers expert website development services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development ipswich", "website development agency ipswich", "website development company ipswich"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-ipswich",
  },
  openGraph: {
    title: "Website Development Agency in Ipswich | TML Agency",
    description: "TML offers expert website development services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-ipswich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Ipswich | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Ipswich | TML Agency",
    description: "TML offers expert website development services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
