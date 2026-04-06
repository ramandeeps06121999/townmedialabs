import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "SEO Agency in Cambridge",
  description: "TML offers expert SEO services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo cambridge", "seo agency cambridge", "seo company cambridge"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-cambridge",
  },
  openGraph: {
    title: "SEO Agency in Cambridge",
    description: "TML offers expert SEO services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-cambridge",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Cambridge" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Cambridge",
    description: "TML offers expert SEO services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCambridgePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
