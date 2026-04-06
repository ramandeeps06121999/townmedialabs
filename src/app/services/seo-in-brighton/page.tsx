import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "SEO Agency in Brighton",
  description: "TML offers expert SEO services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo brighton", "seo agency brighton", "seo company brighton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-brighton",
  },
  openGraph: {
    title: "SEO Agency in Brighton",
    description: "TML offers expert SEO services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-brighton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Brighton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Brighton",
    description: "TML offers expert SEO services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBrightonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
