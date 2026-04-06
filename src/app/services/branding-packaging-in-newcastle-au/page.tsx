import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Newcastle",
  description: "TML offers expert Packaging Design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design newcastle", "packaging design agency newcastle", "packaging design company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-newcastle-au",
  },
  openGraph: {
    title: "Packaging Design Agency in Newcastle",
    description: "TML offers expert Packaging Design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-newcastle-au",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Newcastle" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Newcastle",
    description: "TML offers expert Packaging Design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInNewcastleAuPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
