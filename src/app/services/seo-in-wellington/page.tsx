import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "SEO Agency in Wellington",
  description: "TML offers expert SEO services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo wellington", "seo agency wellington", "seo wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-wellington",
  },
  openGraph: {
    title: "SEO Agency in Wellington",
    description: "TML offers expert SEO services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Wellington" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Wellington",
    description: "TML offers expert SEO services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInWellingtonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
