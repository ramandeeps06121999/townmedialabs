import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Faridabad",
  description: "TML offers expert Branding and Packaging services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging faridabad", "branding and packaging agency faridabad", "branding and packaging company faridabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-faridabad",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Faridabad",
    description: "TML offers expert Branding and Packaging services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-faridabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Faridabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Faridabad",
    description: "TML offers expert Branding and Packaging services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInFaridabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
