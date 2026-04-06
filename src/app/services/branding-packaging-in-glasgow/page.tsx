import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Glasgow",
  description: "TML offers expert Packaging Design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design glasgow", "packaging design agency glasgow", "packaging design company glasgow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-glasgow",
  },
  openGraph: {
    title: "Packaging Design Agency in Glasgow",
    description: "TML offers expert Packaging Design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-glasgow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Glasgow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Glasgow",
    description: "TML offers expert Packaging Design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInGlasgowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
