import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Launceston",
  description: "TML offers expert Packaging Design services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design launceston", "packaging design agency launceston", "packaging design company launceston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-launceston",
  },
  openGraph: {
    title: "Packaging Design Agency in Launceston",
    description: "TML offers expert Packaging Design services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-launceston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Launceston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Launceston",
    description: "TML offers expert Packaging Design services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInLauncestonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
