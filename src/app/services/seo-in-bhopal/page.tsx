import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "SEO Agency in Bhopal",
  description: "TML offers expert Search Engine Optimization services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization bhopal", "search engine optimization agency bhopal", "search engine optimization company bhopal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-bhopal",
  },
  openGraph: {
    title: "SEO Agency in Bhopal",
    description: "TML offers expert Search Engine Optimization services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-bhopal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Bhopal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Bhopal",
    description: "TML offers expert Search Engine Optimization services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBhopalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
