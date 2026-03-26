import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Faridabad | TML Agency",
  description: "TML offers expert search engine optimization services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization faridabad", "search engine optimization agency faridabad", "search engine optimization company faridabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-faridabad",
  },
  openGraph: {
    title: "Best SEO Agency in Faridabad | TML Agency",
    description: "TML offers expert search engine optimization services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-faridabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Faridabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Faridabad | TML Agency",
    description: "TML offers expert search engine optimization services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
