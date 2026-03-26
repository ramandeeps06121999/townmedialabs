import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert seo services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo stoke-on-trent", "seo agency stoke-on-trent", "seo company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-stoke-on-trent",
  },
  openGraph: {
    title: "Best SEO Agency in Stoke-on-Trent | TML Agency",
    description: "TML offers expert seo services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Stoke-on-Trent | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Stoke-on-Trent | TML Agency",
    description: "TML offers expert seo services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
