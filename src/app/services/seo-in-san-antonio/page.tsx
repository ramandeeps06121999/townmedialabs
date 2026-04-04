import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "SEO Agency in San Antonio | TML Agency",
  description: "TML offers expert seo services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo san antonio", "seo agency san antonio", "seo company san antonio"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-san-antonio",
  },
  openGraph: {
    title: "SEO Agency in San Antonio | TML Agency",
    description: "TML offers expert seo services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-san-antonio",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in San Antonio | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in San Antonio | TML Agency",
    description: "TML offers expert seo services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
