import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "SEO Agency in Bendigo | TML Agency",
  description: "TML offers expert seo services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo bendigo", "seo agency bendigo", "seo company bendigo"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-bendigo",
  },
  openGraph: {
    title: "SEO Agency in Bendigo | TML Agency",
    description: "TML offers expert seo services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-bendigo",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Bendigo | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Bendigo | TML Agency",
    description: "TML offers expert seo services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
