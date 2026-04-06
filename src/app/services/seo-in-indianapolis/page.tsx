import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "SEO Agency in Indianapolis",
  description: "TML offers expert SEO services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo indianapolis", "seo agency indianapolis", "seo company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-indianapolis",
  },
  openGraph: {
    title: "SEO Agency in Indianapolis",
    description: "TML offers expert SEO services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Indianapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Indianapolis",
    description: "TML offers expert SEO services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInIndianapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
