import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Branding Agency in Zirakpur",
  description: "TML offers expert Branding services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding zirakpur", "branding agency zirakpur", "branding company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-zirakpur",
  },
  openGraph: {
    title: "Branding Agency in Zirakpur",
    description: "TML offers expert Branding services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Zirakpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Zirakpur",
    description: "TML offers expert Branding services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInZirakpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
