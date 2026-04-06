import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Napier",
  description: "TML offers expert Packaging Design services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design napier", "packaging design agency napier", "packaging design napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-napier",
  },
  openGraph: {
    title: "Packaging Design Agency in Napier",
    description: "TML offers expert Packaging Design services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Napier" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Napier",
    description: "TML offers expert Packaging Design services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInNapierPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
