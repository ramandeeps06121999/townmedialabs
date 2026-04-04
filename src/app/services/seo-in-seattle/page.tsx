import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "SEO Agency in Seattle | TML Agency",
  description: "TML offers expert seo services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo seattle", "seo agency seattle", "seo company seattle"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-seattle",
  },
  openGraph: {
    title: "SEO Agency in Seattle | TML Agency",
    description: "TML offers expert seo services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-seattle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Seattle | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Seattle | TML Agency",
    description: "TML offers expert seo services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
