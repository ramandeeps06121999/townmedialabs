import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "SEO Agency in Surat",
  description: "TML offers expert Search Engine Optimization services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization surat", "search engine optimization agency surat", "search engine optimization company surat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-surat",
  },
  openGraph: {
    title: "SEO Agency in Surat",
    description: "TML offers expert Search Engine Optimization services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-surat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Surat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Surat",
    description: "TML offers expert Search Engine Optimization services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSuratPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
