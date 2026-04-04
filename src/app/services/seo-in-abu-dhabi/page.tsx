import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "SEO Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert seo services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo abu dhabi", "seo agency abu dhabi", "seo company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-abu-dhabi",
  },
  openGraph: {
    title: "SEO Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert seo services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Abu Dhabi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert seo services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
