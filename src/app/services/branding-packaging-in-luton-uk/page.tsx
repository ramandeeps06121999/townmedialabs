import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Luton",
  description: "TML offers expert Packaging Design services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design luton", "packaging design agency luton", "packaging design company luton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-luton-uk",
  },
  openGraph: {
    title: "Packaging Design Agency in Luton",
    description: "TML offers expert Packaging Design services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-luton-uk",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Luton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Luton",
    description: "TML offers expert Packaging Design services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInLutonUkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
