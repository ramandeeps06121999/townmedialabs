import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "SEO Agency in Sacramento",
  description: "TML offers expert SEO services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sacramento", "seo agency sacramento", "seo company sacramento"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-sacramento",
  },
  openGraph: {
    title: "SEO Agency in Sacramento",
    description: "TML offers expert SEO services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-sacramento",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sacramento" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Sacramento",
    description: "TML offers expert SEO services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSacramentoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
