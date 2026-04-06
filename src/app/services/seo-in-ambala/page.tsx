import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "SEO Agency in Ambala",
  description: "TML offers expert Search Engine Optimization services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization ambala", "search engine optimization agency ambala", "search engine optimization company ambala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ambala",
  },
  openGraph: {
    title: "SEO Agency in Ambala",
    description: "TML offers expert Search Engine Optimization services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ambala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ambala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Ambala",
    description: "TML offers expert Search Engine Optimization services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAmbalaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
