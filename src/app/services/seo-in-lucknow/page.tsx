import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "SEO Agency in Lucknow",
  description: "TML offers expert Search Engine Optimization services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization lucknow", "search engine optimization agency lucknow", "search engine optimization company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-lucknow",
  },
  openGraph: {
    title: "SEO Agency in Lucknow",
    description: "TML offers expert Search Engine Optimization services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Lucknow",
    description: "TML offers expert Search Engine Optimization services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
