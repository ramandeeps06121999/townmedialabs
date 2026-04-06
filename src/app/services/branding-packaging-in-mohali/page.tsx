import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Mohali",
  description: "TML offers expert Branding and Packaging services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging mohali", "branding and packaging agency mohali", "branding and packaging company mohali"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-mohali",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Mohali",
    description: "TML offers expert Branding and Packaging services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-mohali",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Mohali" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Mohali",
    description: "TML offers expert Branding and Packaging services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInMohaliPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
