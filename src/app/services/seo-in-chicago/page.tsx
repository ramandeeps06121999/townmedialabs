import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "SEO Agency in Chicago",
  description: "TML offers expert SEO services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo chicago", "seo agency chicago", "seo company chicago"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-chicago",
  },
  openGraph: {
    title: "SEO Agency in Chicago",
    description: "TML offers expert SEO services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-chicago",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Chicago" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Chicago",
    description: "TML offers expert SEO services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInChicagoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
