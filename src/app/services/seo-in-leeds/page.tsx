import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "SEO Agency in Leeds | TML Agency",
  description: "TML offers expert seo services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo leeds", "seo agency leeds", "seo company leeds"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-leeds",
  },
  openGraph: {
    title: "SEO Agency in Leeds | TML Agency",
    description: "TML offers expert seo services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-leeds",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Leeds | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Leeds | TML Agency",
    description: "TML offers expert seo services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
