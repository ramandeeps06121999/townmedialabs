import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Branding Agency in Napier",
  description: "TML offers expert Branding services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["branding napier", "branding agency napier", "branding napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-napier",
  },
  openGraph: {
    title: "Branding Agency in Napier",
    description: "TML offers expert Branding services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Napier" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Napier",
    description: "TML offers expert Branding services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInNapierPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
