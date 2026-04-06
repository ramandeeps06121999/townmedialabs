import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Rajkot",
  description: "TML offers expert Branding and Packaging services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging rajkot", "branding and packaging agency rajkot", "branding and packaging company rajkot"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-rajkot",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Rajkot",
    description: "TML offers expert Branding and Packaging services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-rajkot",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Rajkot" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Rajkot",
    description: "TML offers expert Branding and Packaging services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInRajkotPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
