import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "SEO Agency in Ghaziabad | TML Agency",
  description: "TML offers expert search engine optimization services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization ghaziabad", "search engine optimization agency ghaziabad", "search engine optimization company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-ghaziabad",
  },
  openGraph: {
    title: "SEO Agency in Ghaziabad | TML Agency",
    description: "TML offers expert search engine optimization services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ghaziabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Ghaziabad | TML Agency",
    description: "TML offers expert search engine optimization services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
