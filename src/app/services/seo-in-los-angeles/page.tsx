import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "SEO Agency in Los Angeles",
  description: "TML offers expert SEO services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo los angeles", "seo agency los angeles", "seo company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-los-angeles",
  },
  openGraph: {
    title: "SEO Agency in Los Angeles",
    description: "TML offers expert SEO services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Los Angeles",
    description: "TML offers expert SEO services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
