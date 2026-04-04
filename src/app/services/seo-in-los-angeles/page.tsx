import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "SEO Agency in Los Angeles | TML Agency",
  description: "TML offers expert seo services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo los angeles", "seo agency los angeles", "seo company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-los-angeles",
  },
  openGraph: {
    title: "SEO Agency in Los Angeles | TML Agency",
    description: "TML offers expert seo services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Los Angeles | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Los Angeles | TML Agency",
    description: "TML offers expert seo services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
