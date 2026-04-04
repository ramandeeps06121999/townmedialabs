import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "SEO Agency in Amritsar | TML Agency",
  description: "TML offers expert search engine optimization services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization amritsar", "search engine optimization agency amritsar", "search engine optimization company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-amritsar",
  },
  openGraph: {
    title: "SEO Agency in Amritsar | TML Agency",
    description: "TML offers expert search engine optimization services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Amritsar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Amritsar | TML Agency",
    description: "TML offers expert search engine optimization services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
