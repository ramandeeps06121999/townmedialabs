import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "SEO Agency in Pune | TML Agency",
  description: "TML offers expert search engine optimization services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization pune", "search engine optimization agency pune", "search engine optimization company pune"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-pune",
  },
  openGraph: {
    title: "SEO Agency in Pune | TML Agency",
    description: "TML offers expert search engine optimization services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Pune | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Pune | TML Agency",
    description: "TML offers expert search engine optimization services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
