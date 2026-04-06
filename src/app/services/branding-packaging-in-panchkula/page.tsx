import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Panchkula",
  description: "TML offers expert Branding and Packaging services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging panchkula", "branding and packaging agency panchkula", "branding and packaging company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-panchkula",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Panchkula",
    description: "TML offers expert Branding and Packaging services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Panchkula" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Panchkula",
    description: "TML offers expert Branding and Packaging services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInPanchkulaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
