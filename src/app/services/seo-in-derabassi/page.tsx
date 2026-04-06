import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "SEO Agency in Derabassi",
  description: "TML offers expert Search Engine Optimization services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization derabassi", "search engine optimization agency derabassi", "search engine optimization company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-derabassi",
  },
  openGraph: {
    title: "SEO Agency in Derabassi",
    description: "TML offers expert Search Engine Optimization services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Derabassi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Derabassi",
    description: "TML offers expert Search Engine Optimization services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDerabassiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
