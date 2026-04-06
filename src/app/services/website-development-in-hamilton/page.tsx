import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Website Development Agency in Hamilton",
  description: "TML offers expert Website Development services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["website development hamilton", "website development agency hamilton", "website development hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-hamilton",
  },
  openGraph: {
    title: "Website Development Agency in Hamilton",
    description: "TML offers expert Website Development services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Hamilton",
    description: "TML offers expert Website Development services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
