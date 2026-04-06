import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "SEO Agency in Mohali",
  description: "TML offers expert Search Engine Optimization services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization mohali", "search engine optimization agency mohali", "search engine optimization company mohali"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-mohali",
  },
  openGraph: {
    title: "SEO Agency in Mohali",
    description: "TML offers expert Search Engine Optimization services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-mohali",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Mohali" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Mohali",
    description: "TML offers expert Search Engine Optimization services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMohaliPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
