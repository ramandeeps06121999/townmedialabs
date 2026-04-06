import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["al_ain"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Al Ain",
  description: "TML offers expert Packaging Design services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design al ain", "packaging design agency al ain", "packaging design company al ain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-al-ain",
  },
  openGraph: {
    title: "Packaging Design Agency in Al Ain",
    description: "TML offers expert Packaging Design services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-al-ain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Al Ain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Al Ain",
    description: "TML offers expert Packaging Design services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInAlAinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
