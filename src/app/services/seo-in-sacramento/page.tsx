import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sacramento | TML Agency",
  description: "TML offers expert seo services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sacramento", "seo agency sacramento", "seo company sacramento"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-sacramento",
  },
  openGraph: {
    title: "Best SEO Agency in Sacramento | TML Agency",
    description: "TML offers expert seo services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-sacramento",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sacramento | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Sacramento | TML Agency",
    description: "TML offers expert seo services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
