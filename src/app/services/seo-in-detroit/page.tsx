import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "SEO Agency in Detroit",
  description: "TML offers expert SEO services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo detroit", "seo agency detroit", "seo company detroit"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-detroit",
  },
  openGraph: {
    title: "SEO Agency in Detroit",
    description: "TML offers expert SEO services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Detroit" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Detroit",
    description: "TML offers expert SEO services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDetroitPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
