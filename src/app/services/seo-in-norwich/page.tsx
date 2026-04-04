import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "SEO Agency in Norwich | TML Agency",
  description: "TML offers expert seo services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo norwich", "seo agency norwich", "seo company norwich"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-norwich",
  },
  openGraph: {
    title: "SEO Agency in Norwich | TML Agency",
    description: "TML offers expert seo services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-norwich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Norwich | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Norwich | TML Agency",
    description: "TML offers expert seo services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
