import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Branding Agency in Kansas City",
  description: "TML offers expert Branding services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding kansas city", "branding agency kansas city", "branding company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-kansas-city",
  },
  openGraph: {
    title: "Branding Agency in Kansas City",
    description: "TML offers expert Branding services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Kansas City",
    description: "TML offers expert Branding services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
