import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Hobart",
  description: "TML offers expert Packaging Design services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design hobart", "packaging design agency hobart", "packaging design company hobart"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-hobart",
  },
  openGraph: {
    title: "Packaging Design Agency in Hobart",
    description: "TML offers expert Packaging Design services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-hobart",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Hobart" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Hobart",
    description: "TML offers expert Packaging Design services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInHobartPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
