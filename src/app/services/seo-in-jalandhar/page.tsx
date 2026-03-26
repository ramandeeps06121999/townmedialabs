import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Jalandhar | TML Agency",
  description: "TML offers expert search engine optimization services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization jalandhar", "search engine optimization agency jalandhar", "search engine optimization company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-jalandhar",
  },
  openGraph: {
    title: "Best SEO Agency in Jalandhar | TML Agency",
    description: "TML offers expert search engine optimization services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Jalandhar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Jalandhar | TML Agency",
    description: "TML offers expert search engine optimization services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
