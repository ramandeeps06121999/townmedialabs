import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "SEO Agency in Darwin",
  description: "TML offers expert SEO services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo darwin", "seo agency darwin", "seo company darwin"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-darwin",
  },
  openGraph: {
    title: "SEO Agency in Darwin",
    description: "TML offers expert SEO services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-darwin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Darwin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Darwin",
    description: "TML offers expert SEO services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDarwinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
