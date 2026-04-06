import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Branding Agency in Louisville",
  description: "TML offers expert Branding services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding louisville", "branding agency louisville", "branding company louisville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-louisville",
  },
  openGraph: {
    title: "Branding Agency in Louisville",
    description: "TML offers expert Branding services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-louisville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Louisville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Louisville",
    description: "TML offers expert Branding services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLouisvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
