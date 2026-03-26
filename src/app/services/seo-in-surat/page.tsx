import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Surat | TML Agency",
  description: "TML offers expert search engine optimization services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization surat", "search engine optimization agency surat", "search engine optimization company surat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-surat",
  },
  openGraph: {
    title: "Best SEO Agency in Surat | TML Agency",
    description: "TML offers expert search engine optimization services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-surat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Surat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Surat | TML Agency",
    description: "TML offers expert search engine optimization services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
