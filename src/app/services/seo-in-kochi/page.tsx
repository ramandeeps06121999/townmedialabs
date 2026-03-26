import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Kochi | TML Agency",
  description: "TML offers expert search engine optimization services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization kochi", "search engine optimization agency kochi", "search engine optimization company kochi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-kochi",
  },
  openGraph: {
    title: "Best SEO Agency in Kochi | TML Agency",
    description: "TML offers expert search engine optimization services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-kochi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Kochi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Kochi | TML Agency",
    description: "TML offers expert search engine optimization services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
