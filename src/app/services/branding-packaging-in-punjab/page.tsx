import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Punjab",
  description: "TML offers expert Packaging Design services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design punjab", "packaging design agency punjab", "packaging design company punjab"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-punjab",
  },
  openGraph: {
    title: "Packaging Design Agency in Punjab",
    description: "TML offers expert Packaging Design services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-punjab",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Punjab" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Punjab",
    description: "TML offers expert Packaging Design services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInPunjabPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
