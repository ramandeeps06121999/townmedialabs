import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Derby | TML Agency",
  description: "TML offers expert seo services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo derby", "seo agency derby", "seo company derby"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-derby",
  },
  openGraph: {
    title: "Best SEO Agency in Derby | TML Agency",
    description: "TML offers expert seo services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-derby",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Derby | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Derby | TML Agency",
    description: "TML offers expert seo services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
