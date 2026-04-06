import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "SEO Agency in Gold Coast",
  description: "TML offers expert SEO services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo gold coast", "seo agency gold coast", "seo company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-gold-coast",
  },
  openGraph: {
    title: "SEO Agency in Gold Coast",
    description: "TML offers expert SEO services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Gold Coast",
    description: "TML offers expert SEO services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
