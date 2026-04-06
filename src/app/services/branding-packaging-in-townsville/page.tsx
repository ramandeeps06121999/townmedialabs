import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Townsville",
  description: "TML offers expert Packaging Design services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design townsville", "packaging design agency townsville", "packaging design company townsville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-townsville",
  },
  openGraph: {
    title: "Packaging Design Agency in Townsville",
    description: "TML offers expert Packaging Design services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-townsville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Townsville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Townsville",
    description: "TML offers expert Packaging Design services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInTownsvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
