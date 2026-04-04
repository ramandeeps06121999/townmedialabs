import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "SEO Agency in Detroit | TML Agency",
  description: "TML offers expert seo services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo detroit", "seo agency detroit", "seo company detroit"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-detroit",
  },
  openGraph: {
    title: "SEO Agency in Detroit | TML Agency",
    description: "TML offers expert seo services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Detroit | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Detroit | TML Agency",
    description: "TML offers expert seo services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
