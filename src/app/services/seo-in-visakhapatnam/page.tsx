import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "SEO Agency in Visakhapatnam",
  description: "TML offers expert Search Engine Optimization services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization visakhapatnam", "search engine optimization agency visakhapatnam", "search engine optimization company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-visakhapatnam",
  },
  openGraph: {
    title: "SEO Agency in Visakhapatnam",
    description: "TML offers expert Search Engine Optimization services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Visakhapatnam",
    description: "TML offers expert Search Engine Optimization services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
