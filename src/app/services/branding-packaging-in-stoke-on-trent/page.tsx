import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Stoke-on-Trent",
  description: "TML offers expert Packaging Design services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design stoke-on-trent", "packaging design agency stoke-on-trent", "packaging design company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-stoke-on-trent",
  },
  openGraph: {
    title: "Packaging Design Agency in Stoke-on-Trent",
    description: "TML offers expert Packaging Design services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Stoke-on-Trent",
    description: "TML offers expert Packaging Design services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
