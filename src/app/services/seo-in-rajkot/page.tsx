import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "SEO Agency in Rajkot",
  description: "TML offers expert Search Engine Optimization services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization rajkot", "search engine optimization agency rajkot", "search engine optimization company rajkot"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-rajkot",
  },
  openGraph: {
    title: "SEO Agency in Rajkot",
    description: "TML offers expert Search Engine Optimization services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-rajkot",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Rajkot" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Rajkot",
    description: "TML offers expert Search Engine Optimization services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInRajkotPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
