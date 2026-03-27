import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Packaging Design Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert packaging design services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design ras al khaimah", "packaging design agency ras al khaimah", "packaging design company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Ras Al Khaimah | TML Agency",
    description: "TML offers expert packaging design services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Ras Al Khaimah | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Ras Al Khaimah | TML Agency",
    description: "TML offers expert packaging design services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
