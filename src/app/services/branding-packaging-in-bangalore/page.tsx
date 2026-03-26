import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Bangalore | TML Agency",
  description: "TML offers expert branding and packaging services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging bangalore", "branding and packaging agency bangalore", "branding and packaging company bangalore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-bangalore",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Bangalore | TML Agency",
    description: "TML offers expert branding and packaging services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-bangalore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Bangalore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Bangalore | TML Agency",
    description: "TML offers expert branding and packaging services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
