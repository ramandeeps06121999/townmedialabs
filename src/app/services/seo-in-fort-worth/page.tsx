import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "SEO Agency in Fort Worth | TML Agency",
  description: "TML offers expert seo services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo fort worth", "seo agency fort worth", "seo company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-fort-worth",
  },
  openGraph: {
    title: "SEO Agency in Fort Worth | TML Agency",
    description: "TML offers expert seo services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Fort Worth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Fort Worth | TML Agency",
    description: "TML offers expert seo services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
