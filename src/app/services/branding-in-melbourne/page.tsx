import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Branding Agency in Melbourne",
  description: "TML offers expert Branding services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding melbourne", "branding agency melbourne", "branding company melbourne"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-melbourne",
  },
  openGraph: {
    title: "Branding Agency in Melbourne",
    description: "TML offers expert Branding services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-melbourne",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Melbourne",
    description: "TML offers expert Branding services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMelbournePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
