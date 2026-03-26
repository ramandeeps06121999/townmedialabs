import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Las Vegas | TML Agency",
  description: "TML offers expert seo services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo las vegas", "seo agency las vegas", "seo company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-las-vegas",
  },
  openGraph: {
    title: "Best SEO Agency in Las Vegas | TML Agency",
    description: "TML offers expert seo services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Las Vegas | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Las Vegas | TML Agency",
    description: "TML offers expert seo services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
