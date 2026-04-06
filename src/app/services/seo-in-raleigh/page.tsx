import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "SEO Agency in Raleigh",
  description: "TML offers expert SEO services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo raleigh", "seo agency raleigh", "seo company raleigh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-raleigh",
  },
  openGraph: {
    title: "SEO Agency in Raleigh",
    description: "TML offers expert SEO services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-raleigh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Raleigh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Raleigh",
    description: "TML offers expert SEO services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInRaleighPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
