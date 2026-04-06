import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Omaha",
  description: "TML offers expert Packaging Design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design omaha", "packaging design agency omaha", "packaging design company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-omaha",
  },
  openGraph: {
    title: "Packaging Design Agency in Omaha",
    description: "TML offers expert Packaging Design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Omaha" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Omaha",
    description: "TML offers expert Packaging Design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInOmahaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
