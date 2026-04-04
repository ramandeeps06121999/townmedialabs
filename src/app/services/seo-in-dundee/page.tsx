import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "SEO Agency in Dundee | TML Agency",
  description: "TML offers expert seo services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo dundee", "seo agency dundee", "seo company dundee"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-dundee",
  },
  openGraph: {
    title: "SEO Agency in Dundee | TML Agency",
    description: "TML offers expert seo services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-dundee",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Dundee | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Dundee | TML Agency",
    description: "TML offers expert seo services in Dundee. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
