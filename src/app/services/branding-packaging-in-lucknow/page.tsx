import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Lucknow",
  description: "TML offers expert Branding and Packaging services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging lucknow", "branding and packaging agency lucknow", "branding and packaging company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-lucknow",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Lucknow",
    description: "TML offers expert Branding and Packaging services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Lucknow",
    description: "TML offers expert Branding and Packaging services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
