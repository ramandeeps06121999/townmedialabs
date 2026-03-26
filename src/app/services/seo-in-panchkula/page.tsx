import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Panchkula | TML Agency",
  description: "TML offers expert search engine optimization services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization panchkula", "search engine optimization agency panchkula", "search engine optimization company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-panchkula",
  },
  openGraph: {
    title: "Best SEO Agency in Panchkula | TML Agency",
    description: "TML offers expert search engine optimization services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Panchkula | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Panchkula | TML Agency",
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
