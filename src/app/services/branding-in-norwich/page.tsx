import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Branding Agency in Norwich",
  description: "TML offers expert Branding services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding norwich", "branding agency norwich", "branding company norwich"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-norwich",
  },
  openGraph: {
    title: "Branding Agency in Norwich",
    description: "TML offers expert Branding services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-norwich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Norwich" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Norwich",
    description: "TML offers expert Branding services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInNorwichPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
