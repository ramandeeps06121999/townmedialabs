import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Birmingham",
  description: "TML offers expert Packaging Design services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design birmingham", "packaging design agency birmingham", "packaging design company birmingham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-birmingham",
  },
  openGraph: {
    title: "Packaging Design Agency in Birmingham",
    description: "TML offers expert Packaging Design services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-birmingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Birmingham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Birmingham",
    description: "TML offers expert Packaging Design services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInBirminghamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
