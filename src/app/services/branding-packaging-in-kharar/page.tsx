import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Kharar",
  description: "TML offers expert Branding and Packaging services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging kharar", "branding and packaging agency kharar", "branding and packaging company kharar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-kharar",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Kharar",
    description: "TML offers expert Branding and Packaging services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Kharar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Kharar",
    description: "TML offers expert Branding and Packaging services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInKhararPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
