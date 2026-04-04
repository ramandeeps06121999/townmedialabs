import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "SEO Agency in Aberdeen | TML Agency",
  description: "TML offers expert seo services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo aberdeen", "seo agency aberdeen", "seo company aberdeen"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-aberdeen",
  },
  openGraph: {
    title: "SEO Agency in Aberdeen | TML Agency",
    description: "TML offers expert seo services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-aberdeen",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Aberdeen | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Aberdeen | TML Agency",
    description: "TML offers expert seo services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
