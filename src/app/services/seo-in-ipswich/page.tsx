import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "SEO Agency in Ipswich | TML Agency",
  description: "TML offers expert seo services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo ipswich", "seo agency ipswich", "seo company ipswich"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-ipswich",
  },
  openGraph: {
    title: "SEO Agency in Ipswich | TML Agency",
    description: "TML offers expert seo services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-ipswich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ipswich | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Ipswich | TML Agency",
    description: "TML offers expert seo services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
