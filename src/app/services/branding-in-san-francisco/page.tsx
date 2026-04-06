import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Branding Agency in San Francisco",
  description: "TML offers expert Branding services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding san francisco", "branding agency san francisco", "branding company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-san-francisco",
  },
  openGraph: {
    title: "Branding Agency in San Francisco",
    description: "TML offers expert Branding services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in San Francisco" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in San Francisco",
    description: "TML offers expert Branding services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSanFranciscoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
