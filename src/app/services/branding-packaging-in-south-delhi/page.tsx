import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in South Delhi | TML Agency",
  description: "TML offers expert branding and packaging services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging south delhi", "branding and packaging agency south delhi", "branding and packaging company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-south-delhi",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in South Delhi | TML Agency",
    description: "TML offers expert branding and packaging services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in South Delhi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in South Delhi | TML Agency",
    description: "TML offers expert branding and packaging services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
