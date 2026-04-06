import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "SEO Agency in Atlanta",
  description: "TML offers expert SEO services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo atlanta", "seo agency atlanta", "seo company atlanta"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-atlanta",
  },
  openGraph: {
    title: "SEO Agency in Atlanta",
    description: "TML offers expert SEO services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-atlanta",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Atlanta" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Atlanta",
    description: "TML offers expert SEO services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAtlantaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
