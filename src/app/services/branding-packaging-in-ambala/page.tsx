import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Ambala",
  description: "TML offers expert Branding and Packaging services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging ambala", "branding and packaging agency ambala", "branding and packaging company ambala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-ambala",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Ambala",
    description: "TML offers expert Branding and Packaging services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-ambala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Ambala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Ambala",
    description: "TML offers expert Branding and Packaging services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInAmbalaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
