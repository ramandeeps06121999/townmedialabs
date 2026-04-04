import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "SEO Agency in New York | TML Agency",
  description: "TML offers expert seo services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo new york", "seo agency new york", "seo company new york"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-new-york",
  },
  openGraph: {
    title: "SEO Agency in New York | TML Agency",
    description: "TML offers expert seo services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in New York | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in New York | TML Agency",
    description: "TML offers expert seo services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
