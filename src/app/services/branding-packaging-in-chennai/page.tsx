import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Chennai",
  description: "TML offers expert Branding and Packaging services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging chennai", "branding and packaging agency chennai", "branding and packaging company chennai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-chennai",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Chennai",
    description: "TML offers expert Branding and Packaging services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Chennai",
    description: "TML offers expert Branding and Packaging services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInChennaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
