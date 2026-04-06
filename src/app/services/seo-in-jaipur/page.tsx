import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "SEO Agency in Jaipur",
  description: "TML offers expert Search Engine Optimization services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization jaipur", "search engine optimization agency jaipur", "search engine optimization company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-jaipur",
  },
  openGraph: {
    title: "SEO Agency in Jaipur",
    description: "TML offers expert Search Engine Optimization services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Jaipur",
    description: "TML offers expert Search Engine Optimization services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInJaipurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
