import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Zirakpur",
  description: "TML offers expert Packaging Design services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design zirakpur", "packaging design agency zirakpur", "packaging design company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-zirakpur",
  },
  openGraph: {
    title: "Packaging Design Agency in Zirakpur",
    description: "TML offers expert Packaging Design services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Zirakpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Zirakpur",
    description: "TML offers expert Packaging Design services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInZirakpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
