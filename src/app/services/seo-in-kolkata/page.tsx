import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Kolkata | TML Agency",
  description: "TML offers expert search engine optimization services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization kolkata", "search engine optimization agency kolkata", "search engine optimization company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-kolkata",
  },
  openGraph: {
    title: "Best SEO Agency in Kolkata | TML Agency",
    description: "TML offers expert search engine optimization services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Kolkata | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Kolkata | TML Agency",
    description: "TML offers expert search engine optimization services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
