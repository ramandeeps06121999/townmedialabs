import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "SEO Agency in Amritsar",
  description: "TML offers expert Search Engine Optimization services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization amritsar", "search engine optimization agency amritsar", "search engine optimization company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-amritsar",
  },
  openGraph: {
    title: "SEO Agency in Amritsar",
    description: "TML offers expert Search Engine Optimization services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Amritsar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Amritsar",
    description: "TML offers expert Search Engine Optimization services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAmritsarPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
