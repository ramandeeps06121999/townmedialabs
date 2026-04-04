import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "SEO Agency in Sydney | TML Agency",
  description: "TML offers expert seo services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sydney", "seo agency sydney", "seo company sydney"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-sydney",
  },
  openGraph: {
    title: "SEO Agency in Sydney | TML Agency",
    description: "TML offers expert seo services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-sydney",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sydney | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Sydney | TML Agency",
    description: "TML offers expert seo services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
