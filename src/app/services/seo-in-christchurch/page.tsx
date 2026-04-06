import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "SEO Agency in Christchurch",
  description: "TML offers expert SEO services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo christchurch", "seo agency christchurch", "seo christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-christchurch",
  },
  openGraph: {
    title: "SEO Agency in Christchurch",
    description: "TML offers expert SEO services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Christchurch" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Christchurch",
    description: "TML offers expert SEO services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInChristchurchPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
