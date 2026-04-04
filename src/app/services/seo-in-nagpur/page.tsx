import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "SEO Agency in Nagpur | TML Agency",
  description: "TML offers expert search engine optimization services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization nagpur", "search engine optimization agency nagpur", "search engine optimization company nagpur"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-nagpur",
  },
  openGraph: {
    title: "SEO Agency in Nagpur | TML Agency",
    description: "TML offers expert search engine optimization services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-nagpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Nagpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Nagpur | TML Agency",
    description: "TML offers expert search engine optimization services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
