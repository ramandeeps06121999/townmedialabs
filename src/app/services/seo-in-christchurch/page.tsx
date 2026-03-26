import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Christchurch | TML Agency",
  description: "TML offers expert seo services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo christchurch", "seo agency christchurch", "seo christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-christchurch",
  },
  openGraph: {
    title: "Best SEO Agency in Christchurch | TML Agency",
    description: "TML offers expert seo services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Christchurch | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Christchurch | TML Agency",
    description: "TML offers expert seo services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
