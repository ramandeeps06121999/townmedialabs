import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Gold Coast | TML Agency",
  description: "TML offers expert seo services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo gold coast", "seo agency gold coast", "seo company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-gold-coast",
  },
  openGraph: {
    title: "Best SEO Agency in Gold Coast | TML Agency",
    description: "TML offers expert seo services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Gold Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Gold Coast | TML Agency",
    description: "TML offers expert seo services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
