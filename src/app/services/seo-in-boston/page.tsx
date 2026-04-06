import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "SEO Agency in Boston",
  description: "TML offers expert SEO services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo boston", "seo agency boston", "seo company boston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-boston",
  },
  openGraph: {
    title: "SEO Agency in Boston",
    description: "TML offers expert SEO services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-boston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Boston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Boston",
    description: "TML offers expert SEO services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBostonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
