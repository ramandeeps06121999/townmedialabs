import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "SEO Agency in Liverpool | TML Agency",
  description: "TML offers expert seo services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo liverpool", "seo agency liverpool", "seo company liverpool"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-liverpool",
  },
  openGraph: {
    title: "SEO Agency in Liverpool | TML Agency",
    description: "TML offers expert seo services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-liverpool",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Liverpool | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Liverpool | TML Agency",
    description: "TML offers expert seo services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
