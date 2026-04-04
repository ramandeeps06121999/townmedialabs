import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "SEO Agency in Denver | TML Agency",
  description: "TML offers expert seo services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo denver", "seo agency denver", "seo company denver"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-denver",
  },
  openGraph: {
    title: "SEO Agency in Denver | TML Agency",
    description: "TML offers expert seo services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-denver",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Denver | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Denver | TML Agency",
    description: "TML offers expert seo services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
