import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "SEO Agency in Miami | TML Agency",
  description: "TML offers expert seo services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo miami", "seo agency miami", "seo company miami"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-miami",
  },
  openGraph: {
    title: "SEO Agency in Miami | TML Agency",
    description: "TML offers expert seo services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-miami",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Miami | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Miami | TML Agency",
    description: "TML offers expert seo services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
