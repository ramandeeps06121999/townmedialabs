import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "SEO Agency in Gurgaon",
  description: "TML offers expert Search Engine Optimization services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization gurgaon", "search engine optimization agency gurgaon", "search engine optimization company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-gurgaon",
  },
  openGraph: {
    title: "SEO Agency in Gurgaon",
    description: "TML offers expert Search Engine Optimization services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Gurgaon" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Gurgaon",
    description: "TML offers expert Search Engine Optimization services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGurgaonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
