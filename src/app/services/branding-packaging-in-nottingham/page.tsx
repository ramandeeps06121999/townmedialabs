import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Nottingham",
  description: "TML offers expert Packaging Design services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design nottingham", "packaging design agency nottingham", "packaging design company nottingham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-nottingham",
  },
  openGraph: {
    title: "Packaging Design Agency in Nottingham",
    description: "TML offers expert Packaging Design services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-nottingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Nottingham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Nottingham",
    description: "TML offers expert Packaging Design services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInNottinghamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
