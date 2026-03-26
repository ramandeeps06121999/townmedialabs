import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Charlotte | TML Agency",
  description: "TML offers expert seo services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo charlotte", "seo agency charlotte", "seo company charlotte"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-charlotte",
  },
  openGraph: {
    title: "Best SEO Agency in Charlotte | TML Agency",
    description: "TML offers expert seo services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-charlotte",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Charlotte | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Charlotte | TML Agency",
    description: "TML offers expert seo services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
