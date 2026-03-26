import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Derabassi | TML Agency",
  description: "TML offers expert search engine optimization services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization derabassi", "search engine optimization agency derabassi", "search engine optimization company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-derabassi",
  },
  openGraph: {
    title: "Best SEO Agency in Derabassi | TML Agency",
    description: "TML offers expert search engine optimization services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Derabassi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Derabassi | TML Agency",
    description: "TML offers expert search engine optimization services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
