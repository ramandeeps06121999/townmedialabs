import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Ludhiana",
  description: "TML offers expert Packaging Design services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design ludhiana", "packaging design agency ludhiana", "packaging design company ludhiana"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-ludhiana",
  },
  openGraph: {
    title: "Packaging Design Agency in Ludhiana",
    description: "TML offers expert Packaging Design services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-ludhiana",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Ludhiana" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Ludhiana",
    description: "TML offers expert Packaging Design services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInLudhianaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
