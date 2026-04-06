import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Branding Agency in Southampton",
  description: "TML offers expert Branding services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding southampton", "branding agency southampton", "branding company southampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-southampton",
  },
  openGraph: {
    title: "Branding Agency in Southampton",
    description: "TML offers expert Branding services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Southampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Southampton",
    description: "TML offers expert Branding services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSouthamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
