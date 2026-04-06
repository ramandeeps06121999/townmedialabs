import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "SEO Agency in Bristol",
  description: "TML offers expert SEO services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo bristol", "seo agency bristol", "seo company bristol"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-bristol",
  },
  openGraph: {
    title: "SEO Agency in Bristol",
    description: "TML offers expert SEO services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Bristol" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Bristol",
    description: "TML offers expert SEO services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBristolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
