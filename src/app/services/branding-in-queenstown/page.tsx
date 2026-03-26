import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Queenstown | TML Agency",
  description: "TML offers expert branding services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["branding queenstown", "branding agency queenstown", "branding queenstown nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-queenstown",
  },
  openGraph: {
    title: "Best Branding Agency in Queenstown | TML Agency",
    description: "TML offers expert branding services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-queenstown",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Queenstown | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Queenstown | TML Agency",
    description: "TML offers expert branding services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInQueenstownPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
