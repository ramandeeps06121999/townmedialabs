import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Kolkata",
  description: "TML offers expert Branding and Packaging services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging kolkata", "branding and packaging agency kolkata", "branding and packaging company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-kolkata",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Kolkata",
    description: "TML offers expert Branding and Packaging services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Kolkata",
    description: "TML offers expert Branding and Packaging services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInKolkataPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
