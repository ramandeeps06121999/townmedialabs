import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Calgary",
  description: "TML offers expert Packaging Design services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design calgary", "packaging design agency calgary"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-calgary",
  },
  openGraph: {
    title: "Packaging Design Agency in Calgary",
    description: "TML offers expert Packaging Design services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-calgary",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Calgary",
    description: "TML offers expert Packaging Design services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
