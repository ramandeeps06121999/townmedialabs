import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "SEO Agency in Atlanta | TML Agency",
  description: "TML offers expert seo services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo atlanta", "seo agency atlanta", "seo company atlanta"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-atlanta",
  },
  openGraph: {
    title: "SEO Agency in Atlanta | TML Agency",
    description: "TML offers expert seo services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-atlanta",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Atlanta | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Atlanta | TML Agency",
    description: "TML offers expert seo services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
