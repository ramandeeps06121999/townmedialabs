import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "SEO Agency in Geelong | TML Agency",
  description: "TML offers expert seo services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo geelong", "seo agency geelong", "seo company geelong"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-geelong",
  },
  openGraph: {
    title: "SEO Agency in Geelong | TML Agency",
    description: "TML offers expert seo services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Geelong | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Geelong | TML Agency",
    description: "TML offers expert seo services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
