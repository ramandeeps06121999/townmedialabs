import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "SEO Agency in Philadelphia | TML Agency",
  description: "TML offers expert seo services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo philadelphia", "seo agency philadelphia", "seo company philadelphia"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-philadelphia",
  },
  openGraph: {
    title: "SEO Agency in Philadelphia | TML Agency",
    description: "TML offers expert seo services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-philadelphia",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Philadelphia | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Philadelphia | TML Agency",
    description: "TML offers expert seo services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
