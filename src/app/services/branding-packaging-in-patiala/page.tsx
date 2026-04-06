import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Patiala",
  description: "TML offers expert Branding and Packaging services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging patiala", "branding and packaging agency patiala", "branding and packaging company patiala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-patiala",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Patiala",
    description: "TML offers expert Branding and Packaging services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-patiala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Patiala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Patiala",
    description: "TML offers expert Branding and Packaging services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInPatialaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
