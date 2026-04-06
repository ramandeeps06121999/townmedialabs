import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Hamilton",
  description: "TML offers expert Packaging Design services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["packaging design hamilton", "packaging design agency hamilton", "packaging design hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-hamilton",
  },
  openGraph: {
    title: "Packaging Design Agency in Hamilton",
    description: "TML offers expert Packaging Design services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Hamilton",
    description: "TML offers expert Packaging Design services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
