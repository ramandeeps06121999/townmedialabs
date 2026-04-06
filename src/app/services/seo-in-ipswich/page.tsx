import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "SEO Agency in Ipswich",
  description: "TML offers expert SEO services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo ipswich", "seo agency ipswich", "seo company ipswich"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ipswich",
  },
  openGraph: {
    title: "SEO Agency in Ipswich",
    description: "TML offers expert SEO services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ipswich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ipswich" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Ipswich",
    description: "TML offers expert SEO services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInIpswichPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
