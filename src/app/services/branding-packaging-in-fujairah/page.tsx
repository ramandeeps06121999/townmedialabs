import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Fujairah",
  description: "TML offers expert Packaging Design services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design fujairah", "packaging design agency fujairah", "packaging design company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-fujairah",
  },
  openGraph: {
    title: "Packaging Design Agency in Fujairah",
    description: "TML offers expert Packaging Design services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Fujairah",
    description: "TML offers expert Packaging Design services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
