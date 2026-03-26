import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Townsville | TML Agency",
  description: "TML offers expert seo services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo townsville", "seo agency townsville", "seo company townsville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-townsville",
  },
  openGraph: {
    title: "Best SEO Agency in Townsville | TML Agency",
    description: "TML offers expert seo services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-townsville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Townsville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Townsville | TML Agency",
    description: "TML offers expert seo services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
