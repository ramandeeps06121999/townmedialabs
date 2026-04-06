import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "SEO Agency in Kolkata",
  description: "TML offers expert Search Engine Optimization services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization kolkata", "search engine optimization agency kolkata", "search engine optimization company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-kolkata",
  },
  openGraph: {
    title: "SEO Agency in Kolkata",
    description: "TML offers expert Search Engine Optimization services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Kolkata",
    description: "TML offers expert Search Engine Optimization services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInKolkataPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
