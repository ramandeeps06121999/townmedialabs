import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Bathinda | TML Agency",
  description: "TML offers expert seo services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo bathinda", "seo agency bathinda", "seo company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-bathinda",
  },
  openGraph: {
    title: "Best SEO Agency in Bathinda | TML Agency",
    description: "TML offers expert seo services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Bathinda | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Bathinda | TML Agency",
    description: "TML offers expert seo services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
