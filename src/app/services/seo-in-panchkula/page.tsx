import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "SEO Agency in Panchkula | TML Agency",
  description: "TML offers expert search engine optimization services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization panchkula", "search engine optimization agency panchkula", "search engine optimization company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-panchkula",
  },
  openGraph: {
    title: "SEO Agency in Panchkula | TML Agency",
    description: "TML offers expert search engine optimization services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Panchkula | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Panchkula | TML Agency",
    description: "TML offers expert search engine optimization services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
