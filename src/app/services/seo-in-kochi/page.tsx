import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "SEO Agency in Kochi",
  description: "TML offers expert Search Engine Optimization services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization kochi", "search engine optimization agency kochi", "search engine optimization company kochi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-kochi",
  },
  openGraph: {
    title: "SEO Agency in Kochi",
    description: "TML offers expert Search Engine Optimization services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-kochi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Kochi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Kochi",
    description: "TML offers expert Search Engine Optimization services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInKochiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
