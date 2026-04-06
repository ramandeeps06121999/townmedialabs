import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Kochi",
  description: "TML offers expert Branding and Packaging services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging kochi", "branding and packaging agency kochi", "branding and packaging company kochi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-kochi",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Kochi",
    description: "TML offers expert Branding and Packaging services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-kochi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Kochi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Kochi",
    description: "TML offers expert Branding and Packaging services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInKochiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
