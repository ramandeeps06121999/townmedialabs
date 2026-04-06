import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Panipat",
  description: "TML offers expert Branding and Packaging services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging panipat", "branding and packaging agency panipat", "branding and packaging company panipat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-panipat",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Panipat",
    description: "TML offers expert Branding and Packaging services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Panipat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Panipat",
    description: "TML offers expert Branding and Packaging services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInPanipatPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
