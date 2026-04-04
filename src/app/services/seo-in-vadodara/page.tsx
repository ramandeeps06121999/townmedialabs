import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "SEO Agency in Vadodara | TML Agency",
  description: "TML offers expert search engine optimization services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization vadodara", "search engine optimization agency vadodara", "search engine optimization company vadodara"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-vadodara",
  },
  openGraph: {
    title: "SEO Agency in Vadodara | TML Agency",
    description: "TML offers expert search engine optimization services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-vadodara",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Vadodara | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Vadodara | TML Agency",
    description: "TML offers expert search engine optimization services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
