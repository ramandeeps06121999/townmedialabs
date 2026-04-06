import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Visakhapatnam",
  description: "TML offers expert Branding and Packaging services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging visakhapatnam", "branding and packaging agency visakhapatnam", "branding and packaging company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-visakhapatnam",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Visakhapatnam",
    description: "TML offers expert Branding and Packaging services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Visakhapatnam",
    description: "TML offers expert Branding and Packaging services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
