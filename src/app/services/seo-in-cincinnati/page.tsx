import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "SEO Agency in Cincinnati | TML Agency",
  description: "TML offers expert seo services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo cincinnati", "seo agency cincinnati", "seo company cincinnati"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-cincinnati",
  },
  openGraph: {
    title: "SEO Agency in Cincinnati | TML Agency",
    description: "TML offers expert seo services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-cincinnati",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Cincinnati | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Cincinnati | TML Agency",
    description: "TML offers expert seo services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
