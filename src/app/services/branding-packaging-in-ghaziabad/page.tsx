import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Ghaziabad",
  description: "TML offers expert Branding and Packaging services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging ghaziabad", "branding and packaging agency ghaziabad", "branding and packaging company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-ghaziabad",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Ghaziabad",
    description: "TML offers expert Branding and Packaging services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Ghaziabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Ghaziabad",
    description: "TML offers expert Branding and Packaging services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInGhaziabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
