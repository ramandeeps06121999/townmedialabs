import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Branding Agency in New York",
  description: "TML offers expert Branding services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding new york", "branding agency new york", "branding company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-new-york",
  },
  openGraph: {
    title: "Branding Agency in New York",
    description: "TML offers expert Branding services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in New York",
    description: "TML offers expert Branding services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInNewYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
