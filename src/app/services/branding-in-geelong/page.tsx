import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Branding Agency in Geelong",
  description: "TML offers expert Branding services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding geelong", "branding agency geelong", "branding company geelong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-geelong",
  },
  openGraph: {
    title: "Branding Agency in Geelong",
    description: "TML offers expert Branding services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Geelong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Geelong",
    description: "TML offers expert Branding services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInGeelongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
