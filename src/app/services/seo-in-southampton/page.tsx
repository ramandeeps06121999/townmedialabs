import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "SEO Agency in Southampton",
  description: "TML offers expert SEO services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo southampton", "seo agency southampton", "seo company southampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-southampton",
  },
  openGraph: {
    title: "SEO Agency in Southampton",
    description: "TML offers expert SEO services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Southampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Southampton",
    description: "TML offers expert SEO services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSouthamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
