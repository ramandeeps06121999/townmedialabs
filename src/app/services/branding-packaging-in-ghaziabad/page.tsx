import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Ghaziabad | TML Agency",
  description: "TML offers expert branding and packaging services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging ghaziabad", "branding and packaging agency ghaziabad", "branding and packaging company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-ghaziabad",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Ghaziabad | TML Agency",
    description: "TML offers expert branding and packaging services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Ghaziabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Ghaziabad | TML Agency",
    description: "TML offers expert branding and packaging services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
