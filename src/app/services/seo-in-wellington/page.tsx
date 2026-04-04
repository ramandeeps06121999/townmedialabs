import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "SEO Agency in Wellington | TML Agency",
  description: "TML offers expert seo services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo wellington", "seo agency wellington", "seo wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-wellington",
  },
  openGraph: {
    title: "SEO Agency in Wellington | TML Agency",
    description: "TML offers expert seo services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Wellington | TML Agency",
    description: "TML offers expert seo services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
