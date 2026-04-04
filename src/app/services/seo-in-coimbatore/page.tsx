import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "SEO Agency in Coimbatore | TML Agency",
  description: "TML offers expert search engine optimization services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization coimbatore", "search engine optimization agency coimbatore", "search engine optimization company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-coimbatore",
  },
  openGraph: {
    title: "SEO Agency in Coimbatore | TML Agency",
    description: "TML offers expert search engine optimization services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Coimbatore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Coimbatore | TML Agency",
    description: "TML offers expert search engine optimization services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
