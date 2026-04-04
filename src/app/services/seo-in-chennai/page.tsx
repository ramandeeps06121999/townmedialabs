import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "SEO Agency in Chennai | TML Agency",
  description: "TML offers expert search engine optimization services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization chennai", "search engine optimization agency chennai", "search engine optimization company chennai"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-chennai",
  },
  openGraph: {
    title: "SEO Agency in Chennai | TML Agency",
    description: "TML offers expert search engine optimization services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Chennai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Chennai | TML Agency",
    description: "TML offers expert search engine optimization services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
