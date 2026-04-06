import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "SEO Agency in Pune",
  description: "TML offers expert Search Engine Optimization services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization pune", "search engine optimization agency pune", "search engine optimization company pune"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-pune",
  },
  openGraph: {
    title: "SEO Agency in Pune",
    description: "TML offers expert Search Engine Optimization services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Pune" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Pune",
    description: "TML offers expert Search Engine Optimization services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPunePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
