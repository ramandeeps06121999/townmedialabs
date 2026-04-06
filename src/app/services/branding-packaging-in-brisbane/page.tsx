import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Brisbane",
  description: "TML offers expert Packaging Design services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design brisbane", "packaging design agency brisbane", "packaging design company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-brisbane",
  },
  openGraph: {
    title: "Packaging Design Agency in Brisbane",
    description: "TML offers expert Packaging Design services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Brisbane",
    description: "TML offers expert Packaging Design services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInBrisbanePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
