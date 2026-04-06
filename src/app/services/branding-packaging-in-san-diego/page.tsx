import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_diego"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in San Diego",
  description: "TML offers expert Packaging Design services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design san diego", "packaging design agency san diego", "packaging design company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-san-diego",
  },
  openGraph: {
    title: "Packaging Design Agency in San Diego",
    description: "TML offers expert Packaging Design services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in San Diego" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in San Diego",
    description: "TML offers expert Packaging Design services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInSanDiegoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
