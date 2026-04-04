import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "SEO Agency in Virginia Beach | TML Agency",
  description: "TML offers expert seo services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo virginia beach", "seo agency virginia beach", "seo company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-virginia-beach",
  },
  openGraph: {
    title: "SEO Agency in Virginia Beach | TML Agency",
    description: "TML offers expert seo services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Virginia Beach | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Virginia Beach | TML Agency",
    description: "TML offers expert seo services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
