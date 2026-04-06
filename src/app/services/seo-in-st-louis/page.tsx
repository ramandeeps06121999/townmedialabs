import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "SEO Agency in St. Louis",
  description: "TML offers expert SEO services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo st. louis", "seo agency st. louis", "seo company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-st-louis",
  },
  openGraph: {
    title: "SEO Agency in St. Louis",
    description: "TML offers expert SEO services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in St. Louis",
    description: "TML offers expert SEO services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
