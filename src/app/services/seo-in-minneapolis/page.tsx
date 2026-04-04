import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "SEO Agency in Minneapolis | TML Agency",
  description: "TML offers expert seo services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo minneapolis", "seo agency minneapolis", "seo company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-minneapolis",
  },
  openGraph: {
    title: "SEO Agency in Minneapolis | TML Agency",
    description: "TML offers expert seo services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Minneapolis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Minneapolis | TML Agency",
    description: "TML offers expert seo services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
