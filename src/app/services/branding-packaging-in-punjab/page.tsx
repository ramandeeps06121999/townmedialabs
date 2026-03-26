import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Punjab | TML Agency",
  description: "TML offers expert packaging design services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design punjab", "packaging design agency punjab", "packaging design company punjab"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-punjab",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Punjab | TML Agency",
    description: "TML offers expert packaging design services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-punjab",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Punjab | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Punjab | TML Agency",
    description: "TML offers expert packaging design services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
