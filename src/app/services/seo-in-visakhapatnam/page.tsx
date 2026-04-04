import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "SEO Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert search engine optimization services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization visakhapatnam", "search engine optimization agency visakhapatnam", "search engine optimization company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-visakhapatnam",
  },
  openGraph: {
    title: "SEO Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert search engine optimization services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Visakhapatnam | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert search engine optimization services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
