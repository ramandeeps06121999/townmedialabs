import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Branding Agency in Visakhapatnam",
  description: "TML offers expert Branding services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding visakhapatnam", "branding agency visakhapatnam", "branding company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-visakhapatnam",
  },
  openGraph: {
    title: "Branding Agency in Visakhapatnam",
    description: "TML offers expert Branding services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Visakhapatnam",
    description: "TML offers expert Branding services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
