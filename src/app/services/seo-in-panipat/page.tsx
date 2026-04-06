import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "SEO Agency in Panipat",
  description: "TML offers expert Search Engine Optimization services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization panipat", "search engine optimization agency panipat", "search engine optimization company panipat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-panipat",
  },
  openGraph: {
    title: "SEO Agency in Panipat",
    description: "TML offers expert Search Engine Optimization services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Panipat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Panipat",
    description: "TML offers expert Search Engine Optimization services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPanipatPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
