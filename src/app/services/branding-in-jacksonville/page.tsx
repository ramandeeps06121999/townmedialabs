import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Branding Agency in Jacksonville",
  description: "TML offers expert Branding services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding jacksonville", "branding agency jacksonville", "branding company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-jacksonville",
  },
  openGraph: {
    title: "Branding Agency in Jacksonville",
    description: "TML offers expert Branding services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Jacksonville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Jacksonville",
    description: "TML offers expert Branding services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInJacksonvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
