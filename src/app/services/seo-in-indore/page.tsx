import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "SEO Agency in Indore",
  description: "TML offers expert Search Engine Optimization services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization indore", "search engine optimization agency indore", "search engine optimization company indore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-indore",
  },
  openGraph: {
    title: "SEO Agency in Indore",
    description: "TML offers expert Search Engine Optimization services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Indore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Indore",
    description: "TML offers expert Search Engine Optimization services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInIndorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
