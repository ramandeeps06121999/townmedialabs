import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "SEO Agency in Zirakpur",
  description: "TML offers expert SEO services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo zirakpur", "seo agency zirakpur", "seo company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-zirakpur",
  },
  openGraph: {
    title: "SEO Agency in Zirakpur",
    description: "TML offers expert SEO services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Zirakpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Zirakpur",
    description: "TML offers expert SEO services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInZirakpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
