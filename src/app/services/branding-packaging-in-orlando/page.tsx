import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Packaging Design Agency in Orlando | TML Agency",
  description: "TML offers expert packaging design services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design orlando", "packaging design agency orlando", "packaging design company orlando"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-orlando",
  },
  openGraph: {
    title: "Packaging Design Agency in Orlando | TML Agency",
    description: "TML offers expert packaging design services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-orlando",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Orlando | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Orlando | TML Agency",
    description: "TML offers expert packaging design services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function BrandingPackagingInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
