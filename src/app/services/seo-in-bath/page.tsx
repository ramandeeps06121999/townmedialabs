import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "SEO Agency in Bath | TML Agency",
  description: "TML offers expert seo services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo bath", "seo agency bath", "seo company bath"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-bath",
  },
  openGraph: {
    title: "SEO Agency in Bath | TML Agency",
    description: "TML offers expert seo services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Bath | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Bath | TML Agency",
    description: "TML offers expert seo services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
