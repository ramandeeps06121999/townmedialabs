import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Branding Agency in Hamilton",
  description: "TML offers expert Branding services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["branding hamilton", "branding agency hamilton", "branding hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-hamilton",
  },
  openGraph: {
    title: "Branding Agency in Hamilton",
    description: "TML offers expert Branding services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Hamilton",
    description: "TML offers expert Branding services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
