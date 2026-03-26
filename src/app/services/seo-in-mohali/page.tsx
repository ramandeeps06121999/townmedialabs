import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Mohali | TML Agency",
  description: "TML offers expert search engine optimization services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization mohali", "search engine optimization agency mohali", "search engine optimization company mohali"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-mohali",
  },
  openGraph: {
    title: "Best SEO Agency in Mohali | TML Agency",
    description: "TML offers expert search engine optimization services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-mohali",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Mohali | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Mohali | TML Agency",
    description: "TML offers expert search engine optimization services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
